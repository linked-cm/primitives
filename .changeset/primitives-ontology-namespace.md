---
'@_linked/primitives': minor
---

The primitives ontology moves from `http://lincd.org/ont/radix/` to `https://linked.cm/ont/primitives/`, the first-party scheme every public package uses (`https://linked.cm/ont/{publicSlug}/`). `radix` was a leftover of the package's old name; the ontology and its prefix are now `primitives`, matching the package (and its data file, which already said `primitives`).

No data migration is needed: the ontology defines no terms, so nothing was ever stored under it. The grouping export is now `primitives`; `radix` stays as a deprecated alias. The prefix registered with `Prefix` is now `primitives` instead of `radix`.
