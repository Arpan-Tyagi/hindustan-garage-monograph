import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion, MotionGlobalConfig } from 'framer-motion';

export interface TelemetryScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

const GLYPHS = '0123456789ABCDEF#X/';

export const TelemetryScramble: React.FC<TelemetryScrambleProps> = ({
  text,
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const shouldReduceMotion = useReducedMotion();
  const isAnimationSkipped = MotionGlobalConfig.skipAnimations;

  const [displayText, setDisplayText] = useState<string>(() => {
    if (isAnimationSkipped || shouldReduceMotion) {
      return text;
    }
    // Initial scrambled state
    return text
      .split('')
      .map((char) => (/[A-Za-z0-9]/.test(char) ? GLYPHS[Math.floor(Math.random() * GLYPHS.length)] : char))
      .join('');
  });

  useEffect(() => {
    if (isAnimationSkipped || shouldReduceMotion) {
      setDisplayText(text);
      return;
    }

    if (!isInView) return;

    let timeoutId: NodeJS.Timeout | undefined;
    let iteration = 0;
    const totalIterations = 14;
    const intervalMs = 26; // ~360ms total scramble

    const scramble = () => {
      iteration++;
      const progress = iteration / totalIterations;
      const lockedCharsCount = Math.floor(progress * text.length);

      const next = text
        .split('')
        .map((char, idx) => {
          if (!/[A-Za-z0-9]/.test(char)) return char;
          if (idx < lockedCharsCount) return text[idx];
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join('');

      setDisplayText(next);

      if (iteration < totalIterations) {
        timeoutId = setTimeout(scramble, intervalMs);
      } else {
        setDisplayText(text);
      }
    };

    if (delay > 0) {
      timeoutId = setTimeout(scramble, delay * 1000);
    } else {
      scramble();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView, text, delay, shouldReduceMotion, isAnimationSkipped]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
};
