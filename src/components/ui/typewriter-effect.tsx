
"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const PHRASES = [
  "Automate Tasks with AI Agents",
  "Talk to Artificial Teammates",
  "Bring Your Game Characters to Life"
];
const TYPING_SPEED_MS = 120;
const DELETING_SPEED_MS = 70;
const PHRASE_PAUSE_MS = 1500;
const INTER_PHRASE_PAUSE_MS = 750;
const INITIAL_CLIENT_DELAY_MS = 100; // Small delay before clearing fallback and starting effect on client
const FALLBACK_TEXT = "FrenGen.ai: Custom AI Solutions for Your Business";

interface TypewriterEffectProps {
  className?: string; // Applied to the main span wrapping text and cursor
  cursorClassName?: string; // Specific class for the cursor span
}

export function TypewriterEffect({ className, cursorClassName }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState(FALLBACK_TEXT);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isEffectLogicActive, setIsEffectLogicActive] = useState(false); // Controls when the typing logic actually runs

  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  // Effect for client-side mount and initialization
  useEffect(() => {
    setIsMounted(true);
    
    const initTimeout = setTimeout(() => {
      if (document.visibilityState === 'visible') {
        setDisplayText(""); // Clear fallback text to start fresh
        setCharIndex(0);
        setCurrentPhraseIndex(0);
        setIsDeleting(false);
        setIsEffectLogicActive(true); // Allow the main typing effect to start
      }
    }, INITIAL_CLIENT_DELAY_MS);
    timeoutsRef.current.push(initTimeout);

    return () => {
      clearAllTimeouts();
    };
  }, []); // Runs once on mount

  // Main typing/deleting logic
  useEffect(() => {
    if (!isMounted || !isEffectLogicActive) {
      // If not mounted or effect logic not yet active, do nothing.
      // Fallback text is handled by initial state.
      return;
    }

    clearAllTimeouts(); 

    const currentPhrase = PHRASES[currentPhraseIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, DELETING_SPEED_MS);
      } else { // Finished deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setCurrentPhraseIndex(prev => (prev + 1) % PHRASES.length);
          // charIndex is already 0, will be picked up by typing logic
        }, INTER_PHRASE_PAUSE_MS);
      }
    } else { // Typing
      if (charIndex < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, TYPING_SPEED_MS);
      } else { // Finished typing current phrase
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, PHRASE_PAUSE_MS);
      }
    }
    timeoutsRef.current.push(timeoutId);

    return () => clearAllTimeouts();
  }, [charIndex, isDeleting, currentPhraseIndex, isMounted, isEffectLogicActive]);

  // Cursor blinking effect
  useEffect(() => {
    if (!isMounted) return;
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Cursor blink rate
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
