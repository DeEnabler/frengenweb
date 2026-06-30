"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const PHRASES = [
  "Beautiful Websites for Small Businesses",
  "AI-Powered Web Design",
  "Professional Sites in Days, Not Months",
  "Affordable Websites with Real Human Support",
];

const TYPING_SPEED_MS = 120;
const DELETING_SPEED_MS = 70;
const PHRASE_PAUSE_MS = 1500;
const INTER_PHRASE_PAUSE_MS = 750;
const INITIAL_CLIENT_DELAY_MS = 100;
const FALLBACK_TEXT = "Beautiful Websites for Small Businesses";

interface TypewriterEffectProps {
  className?: string;
  cursorClassName?: string;
}

export function TypewriterEffect({ className, cursorClassName }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState(FALLBACK_TEXT);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isEffectLogicActive, setIsEffectLogicActive] = useState(false);

  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  useEffect(() => {
    setIsMounted(true);
    const initTimeout = setTimeout(() => {
      if (document.visibilityState === 'visible') {
        setDisplayText("");
        setCharIndex(0);
        setCurrentPhraseIndex(0);
        setIsDeleting(false);
        setIsEffectLogicActive(true);
      }
    }, INITIAL_CLIENT_DELAY_MS);
    return () => clearTimeout(initTimeout);
  }, []);

  useEffect(() => {
    if (!isEffectLogicActive && !isMounted) return;
    if (!isEffectLogicActive) return;

    let delay: number;

    if (!isDeleting && charIndex < PHRASES[currentPhraseIndex].length) {
      setDisplayText(PHRASES[currentPhraseIndex].substring(0, charIndex + 1));
      setCharIndex(charIndex + 1);
      delay = TYPING_SPEED_MS;
    } else if (!isDeleting && charIndex === PHRASES[currentPhraseIndex].length) {
      delay = PHRASE_PAUSE_MS;
      const timeout = setTimeout(() => setIsDeleting(true), delay);
      timeoutsRef.current.push(timeout);
      return;
    } else if (isDeleting && charIndex > 0) {
      setDisplayText(PHRASES[currentPhraseIndex].substring(0, charIndex - 1));
      setCharIndex(charIndex - 1);
      delay = DELETING_SPEED_MS;
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      delay = INTER_PHRASE_PAUSE_MS;
    } else {
      return;
    }

    const timeout = setTimeout(() => {}, delay);
    timeoutsRef.current.push(timeout);
    return () => {
      clearTimeout(timeout);
    };
  }, [displayText, charIndex, isDeleting, currentPhraseIndex, isEffectLogicActive, isMounted]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMounted) setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, [isMounted]);

  useEffect(() => {
    return () => clearAllTimeouts();
  }, []);

  if (!isMounted) {
    return (
      <span className={cn("font-headline", className)}>
        {FALLBACK_TEXT}
      </span>
    );
  }

  return (
    <span className={cn("font-headline", className)}>
      {displayText}
      {isMounted && showCursor && (
        <span className={cn("typing-cursor", "text-muted-foreground", cursorClassName)} aria-hidden="true">
          |
        </span>
      )}
    </span>
  );
}
