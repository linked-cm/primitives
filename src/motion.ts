/**
 * Motion presets.
 *
 * Design tokens that happen to be objects rather than CSS custom properties, because that is
 * the shape an animation library consumes. Same purpose as a colour token: one definition of
 * "how a list staggers in", so two surfaces cannot disagree about it.
 *
 * This module imports **nothing**, not even types. Every export is a plain object whose type
 * is inferred, and an inferred object literal is structurally assignable to `framer-motion`'s
 * `Variants` and `Transition` at the point of use — so a consumer gets full checking without
 * this package depending on the animation library at all.
 *
 * That matters more than it looks. Naming the types here would mean a devDependency to build
 * and a peer to consume, which is how the workspace ended up with two copies of
 * `framer-motion` and presets from one that were not assignable to the other. A library that
 * animates with CSS should not carry an animation library so it can describe some constants.
 */
import {useReducedMotion} from './hooks/useReducedMotion.js';

/**
 * Shared animation variants for consistent motion across the app
 */

// Fade animations
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const slideInRight = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
};

/**
 * Easing and transition configurations
 */
/**
 * A cubic-bezier easing: the four control points, as a tuple.
 *
 * The tuple type is load-bearing. Written inline, `[0.16, 1, 0.3, 1]` infers as `number[]`,
 * which is not assignable to an animation library's easing type — it wants exactly four
 * numbers. Naming it once fixes that and stops the curve being retyped at each use.
 */
export type Easing = [number, number, number, number];

/** The shared ease-out curve. Decelerates hard at the end, so motion settles rather than stops. */
export const EASE_OUT_CURVE: Easing = [0.16, 1, 0.3, 1];

export const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

export const easeOut = {
  duration: 0.2,
  ease: EASE_OUT_CURVE,
};

export const easeSlow = {
  duration: 0.3,
  ease: EASE_OUT_CURVE,
};

/**
 * Stagger animation configurations
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

/**
 * Slower stagger for table rows - more subtle and elegant
 */
export const tableStaggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const tableRowItem = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: EASE_OUT_CURVE,
    },
  },
};

/**
 * Stagger for card grids - elegant cascade effect
 */
export const cardGridContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

export const cardGridItem = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: EASE_OUT_CURVE,
    },
  },
};

/**
 * Stagger for list items - subtle slide-in effect
 */
export const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.02,
    },
  },
};

export const listItem = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      ease: EASE_OUT_CURVE,
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
export const getTransition = (reducedMotion: boolean) => {
  return reducedMotion ? { duration: 0 } : easeOut;
};
