# @\_linked/primitives

## 1.0.6

### Patch Changes

- [#2](https://github.com/linked-cm/primitives/pull/2) [`9c7d9e3`](https://github.com/linked-cm/primitives/commit/9c7d9e3d9336808d171590b17d9e0f4614c6301e) Thanks [@flyon](https://github.com/flyon)! - Switch to explicit per-step build pipeline so silent build failures no longer ship empty tarballs. The previous `yarn linked build` wrapper was failing silently in CI and dropping all compiled `.js` files from the published tarball.

## 1.0.5

### Patch Changes

- [`479b093`](https://github.com/linked-cm/primitives/commit/479b093a35399f2d8628b7d1bd5e38b1e2e006d6) - Initial release under the new publishing setup.
