"use client";
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const PHRASES = [
  "AI Agents for Small Businesses",
  "Fast, Beautiful Websites for SMBs",
  "Real AI That Actually Saves Money"
];

const TYPING_SPEED_MS = 120;
const DELETING_SPEED_MS = 70;
const PHRASE_PAUSE_MS = 1500;
const INTER_PHRASE_PAUSE_MS = 750;
const INITIAL_CLIENT_DELAY_MS = 100;

const FALLBACK_TEXT = "FrenGen: Practical AI for Small & Medium Businesses";

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

    const currentPhrase = PHRASES[currentPhraseIndex];
    let timeoutId: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, TYPING_SPEED_MS);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, PHRASE_PAUSE_MS);
      }
    } else {
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, DELETING_SPEED_MS);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentPhraseIndex(prev => (prev + 1) % PHRASES.length);
          setIsDeleting(false);
        }, INTER_PHRASE_PAUSE_MS);
      }
    }

    timeoutsRef.current.push(timeoutId);
    return () => clearAllTimeouts();
  }, [charIndex, isDeleting, currentPhraseIndex, isMounted, isEffectLogicActive]);

  useEffect(() => {
    if (!isMounted) return;
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [isMounted]);

  return (
    <span className={cn("inline-block", className)} aria-live="polite" aria-atomic="true">
      {displayText}
      {isMounted && showCursor && (
        <span className={cn("typing-cursor", "text-muted-foreground", cursorClassName)} aria-hidden="true">
          |
        </span>
      )}
    </span>
  );
}
