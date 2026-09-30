---
'@_linked/primitives': patch
---

Depend on `vaul` ^1.1.2 instead of ^0.9.2. vaul 0.9.x declares a React peer range of `^16.8 || ^17.0 || ^18.0`, so in a React 19 app npm could not hoist it and nested a private copy under this package. vaul 1.1.2 includes React 19 in its peer range. The `Drawer` component needs no changes: every part it wraps (`Root`, `Trigger`, `Portal`, `Close`, `Overlay`, `Content`, `Title`, `Description`) keeps the same API, and it type-checks against 1.1.2.
