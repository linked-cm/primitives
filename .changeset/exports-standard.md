---
'@_linked/primitives': patch
---

The package is now ESM-only, like the rest of the Linked packages. The `require` condition pointed at a `lib/cjs` build that could not load — from the published tarball, `require('@_linked/primitives')` already failed — so it is removed together with the CJS build, and `"type": "module"` is set. `import` is unchanged.
