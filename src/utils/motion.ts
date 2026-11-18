import { Variants } from 'framer-motion';

// Architectural Easing Curves inspired by horological & optical precision
export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const; // Dignified editorial deceleration
export const HARDWARE_SNAP = [0.19, 1, 0.22, 1] as const; // Tactile mechanical snap

// Calibrated Spring Physics
export const TACTILE_SPRING = {
  type: 'spring',
  stiffness: 420,
  damping: 28,
  mass: 0.8,
} as const;

export const INERTIA_SPRING = {
  type: 'spring',
  stiffness: 180,
  damping: 24,
  mass: 1.2,
} as const;

// Container Stagger Variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: customDelay,
    },
  }),
};

// Fade and Rise Variant (Standard Section & Card Entrances)
export const fadeInUpVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: customDelay,
      ease: LUXURY_EASE,
    },
  }),
};

// Masked Text Reveal (Editorial Headlines rising from hidden container)
export const maskedLineVariant: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: (customDelay: number = 0) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.85,
      delay: customDelay,
      ease: LUXURY_EASE,
    },
  }),
};

// Archival Inspection Stamp Imprint (Tactile ink stamp on parchment)
export const stampImprintVariant: Variants = {
  hidden: { scale: 1.28, opacity: 0, rotate: -7 },
  visible: (customDelay: number = 0.15) => ({
    scale: 1,
    opacity: 1,
    rotate: -3,
    transition: {
      type: 'spring',
      stiffness: 450,
      damping: 24,
      delay: customDelay,
    },
  }),
};

// Hairline Rule Line Expansion (Draws 1px solid rule lines outwards)
export const ruleLineVariant: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (customDelay: number = 0) => ({
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: customDelay,
      ease: LUXURY_EASE,
    },
  }),
};

// Subtle 3D Card Hover Motion Parameters
export const cardHoverTransition = {
  duration: 0.4,
  ease: LUXURY_EASE,
};
