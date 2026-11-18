import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion, MotionGlobalConfig, animate } from 'framer-motion';
import { LUXURY_EASE } from '../../utils/motion';

export interface RollingCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export const RollingCounter: React.FC<RollingCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.4,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const shouldReduceMotion = useReducedMotion();
  const isAnimationSkipped = MotionGlobalConfig.skipAnimations;

  const formatNumber = (num: number): string => {
    if (decimals > 0) {
      return num.toLocaleString('en-IN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    }
    return Math.round(num).toLocaleString('en-IN');
  };

  // If animations are skipped (tests/SSR/reduced motion), initialize with final value
  const [displayValue, setDisplayValue] = useState<string>(() => {
    if (isAnimationSkipped || shouldReduceMotion) {
      return formatNumber(value);
    }
    return formatNumber(0);
  });

  useEffect(() => {
    if (isAnimationSkipped || shouldReduceMotion) {
      setDisplayValue(formatNumber(value));
      return;
    }

    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: LUXURY_EASE,
      onUpdate: (latest) => {
        setDisplayValue(formatNumber(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, decimals, duration, shouldReduceMotion, isAnimationSkipped]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};
