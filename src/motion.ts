/**
 * Motion presets.
 *
 * Design tokens that happen to be objects rather than CSS custom properties, because that is
 * the shape an animation library consumes. Same purpose as a colour token: one definition of
 * "how a list staggers in", so two surfaces cannot disagree about it.
 *
 * Typed against `framer-motion` but importing **nothing** from it at runtime — every export
 * below is a plain object. That is deliberate: this library animates with CSS, and taking a
 * runtime animation dependency for a set of constants would push it onto every consumer of
 * every component here. `framer-motion` is an optional peer; a consumer that does not
 * animate never installs it.
 */
import type {Transition, Variants} from 'framer-motion';
import {useReducedMotion} from './hooks/useReducedMotion.js';

/**
 * Shared animation variants for consistent motion across the app
 */

// Fade animations
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const slideInRight: Variants = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
};

/**
 * Easing and transition configurations
 */
export const spring: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

export const easeOut: Transition = {
  duration: 0.2,
  ease: [0.16, 1, 0.3, 1],
};

export const easeSlow: Transition = {
  duration: 0.3,
  ease: [0.16, 1, 0.3, 1],
};

/**
 * Stagger animation configurations
 */
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

/**
 * Slower stagger for table rows - more subtle and elegant
 */
export const tableStaggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const tableRowItem: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Stagger for card grids - elegant cascade effect
 */
export const cardGridContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

export const cardGridItem: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Stagger for list items - subtle slide-in effect
 */
export const listContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.02,
    },
  },
};

export const listItem: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Re-exported so a component reaching for the motion presets does not have to know that the
 * preference hook lives elsewhere. It carries no animation dependency of its own.
 */
export {useReducedMotion};

/**
 * Get appropriate transition based on reduced motion preference
 */
export const getTransition = (reducedMotion: boolean): Transition => {
  return reducedMotion ? { duration: 0 } : easeOut;
};
