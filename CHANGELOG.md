# @\_linked/primitives

## 1.0.9

### Patch Changes

- [#9](https://github.com/linked-cm/primitives/pull/9) [`780eaee`](https://github.com/linked-cm/primitives/commit/780eaee5a4bf1c17f21f3840996ad6cbc0caa63b) Thanks [@carlenmy](https://github.com/carlenmy)! - Allow labelled ToggleGroup items to expand to their content while preserving the existing square minimum for icon-only items. Add `--togglegroup-item-padding-x` so consumers can tune inline padding without overriding primitive geometry.

## 1.0.7

### Patch Changes

- [#5](https://github.com/linked-cm/primitives/pull/5) [`985931d`](https://github.com/linked-cm/primitives/commit/985931d7a7e09e34a945dd9ac25d844981fca469) Thanks [@flyon](https://github.com/flyon)! - loadData: ESM-only JSON import — drop the dead CJS branch, add the `{ with: { type: 'json' } }` import attribute.

## 1.0.6

### Patch Changes

- [#2](https://github.com/linked-cm/primitives/pull/2) [`9c7d9e3`](https://github.com/linked-cm/primitives/commit/9c7d9e3d9336808d171590b17d9e0f4614c6301e) Thanks [@flyon](https://github.com/flyon)! - Switch to explicit per-step build pipeline so silent build failures no longer ship empty tarballs. The previous `yarn linked build` wrapper was failing silently in CI and dropping all compiled `.js` files from the published tarball.

## 1.0.5

### Patch Changes

- [`479b093`](https://github.com/linked-cm/primitives/commit/479b093a35399f2d8628b7d1bd5e38b1e2e006d6) - Initial release under the new publishing setup.
