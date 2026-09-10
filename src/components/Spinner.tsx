import * as React from 'react';
import style from './Spinner.module.css';
import {cl} from '@_linked/react/utils/ClassNames';
import {useReducedMotion} from '../hooks/useReducedMotion.js';

export interface SpinnerProps {
  /** Render nothing when false. */
  active?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
  /** Announced to assistive technology. */
  label?: string;
}

/**
 * A loading indicator: a ring that inherits its colour, so it reads on any background.
 *
 * Two things it does that a bare CSS spin does not. It honours
 * `prefers-reduced-motion` — a spinner is the most common thing to make someone with
 * vestibular sensitivity look away — showing a still ring rather than nothing, so the
 * "busy" signal survives. And it renders **nothing** when inactive, so it can be dropped
 * into a scroll sentinel or a button without reserving space it is not using.
 *
 * The ring is an inner element rather than a border on the container. A border on the
 * container is distorted the moment a flex parent stretches it; an explicitly sized inner
 * element stays circular.
 */
export function Spinner({
  active = true,
  size = 'small',
  className,
  label = 'Loading',
}: SpinnerProps) {
  const reducedMotion = useReducedMotion();

  if (!active) return null;

  return (
    <div
      className={cl(style.spinner, style[size], className)}
      role="progressbar"
      aria-busy="true"
      aria-label={label}
    >
      <span
        className={cl(style.ring, reducedMotion && style.reducedMotion)}
        aria-hidden="true"
      />
    </div>
  );
}
