import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<string | null>(null);
  const [cursorText, setCursorText] = useState<string>('');
  const [isFinePointer, setIsFinePointer] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Calibrated spring physics for trailing outer reticle ring (simulates optical mechanical inertia)
  const springConfig = { damping: 28, stiffness: 350, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop devices with high precision pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Inspect target element for cursor context
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        const text = cursorTarget.getAttribute('data-cursor-text') || '';
        setCursorType(type);
        setCursorText(text);
      } else if (target.closest('a, button, input, select, textarea, [role="button"]')) {
        setCursorType('interactive');
        setCursorText('');
      } else {
        setCursorType(null);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isFinePointer || !isVisible) {
    return null;
  }

  // Dynamic dimensions based on context
  const isInspect = cursorType === 'inspect';
  const isTrade = cursorType === 'trade';
  const isInteractive = cursorType === 'interactive';
  const hasCustomText = Boolean(cursorText);

  let ringSize = 34;
  let ringBorder = 'border-ink/40';
  let ringBg = 'bg-transparent';

  if (isInspect) {
    ringSize = 74;
    ringBorder = 'border-crimson';
    ringBg = 'bg-crimson/10';
  } else if (isTrade) {
    ringSize = 82;
    ringBorder = 'border-brass';
    ringBg = 'bg-oxford/20';
  } else if (isInteractive) {
    ringSize = 48;
    ringBorder = 'border-crimson/70';
    ringBg = 'bg-crimson/5';
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Precision Center Pinpoint (Zero Lag) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-crimson rounded-full shadow-sm"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Trailing Outer Optical Reticle Ring (Spring Inertia) */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border ${ringBorder} ${ringBg} flex items-center justify-center backdrop-blur-[1px]`}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: ringSize,
          height: ringSize,
        }}
        animate={{
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut',
        }}
      >
        {/* Contextual Micro Telemetry Label */}
        {(hasCustomText || isInspect || isTrade) && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono tracking-widest uppercase font-bold text-ink px-1 text-center leading-none"
          >
            {cursorText || (isInspect ? 'INSPECT' : 'TRADE RFQ')}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
