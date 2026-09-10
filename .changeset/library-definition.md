---
'@_linked/primitives': patch
---

Add a README stating what this library is, and what belongs in it.

The invariant was already held by every component in the package but written down nowhere:
a headless behaviour source, a CSS module reading `@_linked/css` tokens, and no knowledge of
data, shapes, or any particular application. The package description said only "a UI library
based on Radix UI", which undersells it and is not quite true — `Command` and `MultiSelect`
are cmdk, `Drawer` is vaul, and seven components are hand-written.

Stating it matters because the question this package keeps getting asked is "does X belong
here?", and without an answer components get copied instead of shared. The README gives the
three-question test and shows where the neighbouring layers sit.
