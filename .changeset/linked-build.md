---
"@_linked/primitives": patch
---

Build with `linked build`, the standard build for linked packages. The published `lib/` holds the same files as before; the `rimraf` and `copyfiles` dev dependencies are gone. `@types/node`, which the compiler config already relies on, is now declared as a dev dependency instead of arriving transitively.
