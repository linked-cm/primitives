import {useEffect, useState} from 'react';

/**
 * Whether the viewer has asked for reduced motion.
 *
 * Plain `matchMedia`, deliberately: this is the one piece of the motion story that every
 * component needs and that carries no dependency, so it lives here rather than travelling
 * with an animation library.
 *
 * Starts `false` and corrects on mount. Server-rendered markup cannot know the preference,
 * and rendering the still version first would flash into motion for everyone else; erring
 * toward motion and stopping it is the less disruptive order.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    // `addEventListener` on MediaQueryList is not in older Safari; both are kept because a
    // component library cannot choose its host browser.
    if (query.addEventListener) {
      query.addEventListener('change', onChange);
      return () => query.removeEventListener('change', onChange);
    }
    query.addListener(onChange);
    return () => query.removeListener(onChange);
  }, []);

  return reduced;
}
