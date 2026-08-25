import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const stylesheet = readFileSync(
  new URL('../src/components/ToggleGroup.module.css', import.meta.url),
  'utf8'
);

test('labelled toggle-group items expand while icon-only items retain a square minimum', () => {
  assert.match(stylesheet, /block-size:\s*var\(--togglegroup-item-size/);
  assert.match(stylesheet, /inline-size:\s*auto/);
  assert.match(stylesheet, /min-inline-size:\s*var\(--togglegroup-item-size/);
  assert.match(
    stylesheet,
    /padding-inline:\s*var\(--togglegroup-item-padding-x,\s*--spacing\(2\)\)/
  );
  assert.doesNotMatch(stylesheet, /\bwidth\s*:/);
});
