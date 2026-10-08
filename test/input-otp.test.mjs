import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(
  new URL('../src/components/InputOTP.tsx', import.meta.url),
  'utf8',
);

test('InputOTP exports the generic composition', () => {
  for (const name of [
    'InputOTP',
    'InputOTPGroup',
    'InputOTPSlot',
    'InputOTPSeparator',
  ]) {
    assert.match(source, new RegExp(`export \\{[\\s\\S]*\\b${name}\\b`));
  }
});

test('InputOTP stays free of authentication knowledge', () => {
  assert.doesNotMatch(source, /whatsapp|WhatsApp|validateOTP|useAuth|Server\.call/i);
});
