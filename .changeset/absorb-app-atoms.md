---
'@_linked/primitives': minor
---

Absorb four components that had been living inside an application, and replace the
hand-rolled confirm dialog with a composition over `AlertDialog`.

**`Spinner` is superseded.** The version here was twelve lines with one prop. The replacement
adds size variants, `prefers-reduced-motion` support, a configurable `aria-label`, and draws
the ring as an inner element so a flex parent cannot distort it into an ellipse. Three
differences worth knowing, none of which affects a caller that renders `<Spinner />`:

- `active={false}` now renders **nothing** rather than an element with `aria-busy="false"`.
  A spinner in a scroll sentinel must not reserve space when idle, and `active` had no visual
  effect before — `.active` was never defined in the CSS. (It also emitted a class literally
  named `false`.)
- The ring is an inner `<span>`, so the border is no longer on the container. Consumer CSS
  targeting the container's `border` needs updating; size still comes from the container.
- `--spinner-border-width` defaults to 2px rather than 4px, and the animation to 0.7s rather
  than 1s. Every `--spinner-*` variable still works, so a consumer that themed it keeps its
  theme.

**`ConfirmDialog` is new, and is a composition over the Radix `AlertDialog` already here.** It
replaces a hand-rolled `createPortal` implementation that had no focus trap, no escape
handling, no `aria-modal` and no focus restoration — the worst possible component to get
wrong, since its only job is guarding a destructive action. `tone="danger"` reads the
`--intent-danger-*` family rather than taking a class name, which is what the previous version
did by exporting its own CSS-module object.

**`SkeletonLoader`** and **`ImageThumb`** are new; neither had an equivalent here.

**`motion`** (new export) carries the animation presets — variants, transitions, and
`useReducedMotion`. Typed against `framer-motion` but importing nothing from it at runtime:
every export is a plain object, so `framer-motion` is an **optional** peer and a consumer that
does not animate never installs it.

The colours these bring are all expressed as `--<component>-*` variables falling back to
semantic tokens, per the library contract; none defines a raw colour.
