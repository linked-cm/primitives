---
"@_linked/primitives": patch
---

Declare `react` and `react-dom` as peer dependencies (`^18.2.0 || ^19.0.0`). The components
import both but never said so, so a consumer's React was found by hoisting alone. The package
is now built and type-checked against React 19 and `@types/react` 19, and requires
`@_linked/react` ^1.6.0, the first line whose peer range admits React 19.
