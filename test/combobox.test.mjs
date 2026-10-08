import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(
  new URL('../src/components/Combobox.tsx', import.meta.url),
  'utf8',
);

test('Combobox exports the searchable single-select parts', () => {
  for (const name of ['Root', 'Trigger', 'Content', 'Input', 'List', 'Empty', 'Item']) {
    assert.match(source, new RegExp(`\\b${name},`));
  }
  assert.match(source, /export const Combobox/);
});

test('Combobox is built from Popover and Command', () => {
  assert.match(source, /@radix-ui\/react-popover/);
  assert.match(source, /from '\.\/Command\.js'/);
  assert.doesNotMatch(source, /@base-ui\/react/);
});

test('Combobox returns the original item value', () => {
  assert.match(source, /onValueChange\?\.\(itemValue\)/);
});
