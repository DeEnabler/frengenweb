"use client";
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const PHRASES = [
  "Beautiful Websites for Small Business",
  "AI-Powered Website Building",
  "Professional Sites in Days, Not Months",
  "Affordable Web Design with AI Agents",
];

const TYPING_SPEED_MS = 120;
const DELETING_SPEED_MS = 70;
const PHRASE_PAUSE_MS = 1500;
const INTER_PHRASE_PAUSE_MS = 750;
const INITIAL_CLIENT_DELAY_MS = 100;
const FALLBACK_TEXT = "Missile OS: AI Website Builder for Small Business";

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

    if (!isDeleting && charIndex < PHRASES[currentPhraseIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText(PHRASES[currentPhraseIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, TYPING_SPEED_MS);
      timeoutsRef.current.push(timeout);
    } else if (!isDeleting && charIndex === PHRASES[currentPhraseIndex].length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, PHRASE_PAUSE_MS);
      timeoutsRef.current.push(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(PHRASES[currentPhraseIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, DELETING_SPEED_MS);
      timeoutsRef.current.push(timeout);
    } else if (isDeleting && charIndex === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }, INTER_PHRASE_PAUSE_MS);
      timeoutsRef.current.push(timeout);
    }

    return () => clearAllTimeouts();
  }, [charIndex, isDeleting, currentPhraseIndex, isEffectLogicActive, isMounted]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
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
