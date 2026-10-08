---
"@_linked/primitives": minor
---

Add `InputOTP` for a fixed-length one-time code. It does not know which product or channel the code belongs to.

```tsx
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  REGEXP_ONLY_DIGITS,
} from '@_linked/primitives/components/InputOTP';

<InputOTP
  maxLength={6}
  pattern={REGEXP_ONLY_DIGITS}
  value={code}
  onChange={setCode}
  onComplete={submitCode}
  invalid={hasError}
>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

`invalid` marks the whole code without choosing an error message. `REGEXP_ONLY_DIGITS` is re-exported from `input-otp` for callers that want digits only.
