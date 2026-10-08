import * as React from 'react';
import { OTPInput, OTPInputContext, REGEXP_ONLY_DIGITS } from 'input-otp';

import style from './InputOTP.module.css';
import { cl } from '@_linked/react/utils/ClassNames';

export interface InputOTPProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'children'
  > {
  value?: string;
  onChange?: (value: string) => void;
  maxLength: number;
  onComplete?: (value: string) => void;
  textAlign?: 'left' | 'center' | 'right';
  pasteTransformer?: (pasted: string) => string;
  containerClassName?: string;
  pushPasswordManagerStrategy?: 'increase-width' | 'none';
  noScriptCSSFallback?: string | null;
  /** Marks the whole code invalid without interpreting why. */
  invalid?: boolean;
  children: React.ReactNode;
}

const InputOTP = React.forwardRef<HTMLInputElement, InputOTPProps>(
  (
    { className, containerClassName, invalid = false, children, ...props },
    ref
  ) => (
    <OTPInput
      ref={ref}
      containerClassName={cl(
        style.Root,
        invalid && style.invalid,
        containerClassName
      )}
      className={cl(style.Input, className)}
      aria-invalid={invalid || undefined}
      {...props}
    >
      {children}
    </OTPInput>
  )
);
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cl(style.Group, className)} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const { slots } = React.useContext(OTPInputContext);
  const slot = slots[index];
  const char = slot?.char ?? null;
  const isActive = slot?.isActive ?? false;
  const hasFakeCaret = slot?.hasFakeCaret ?? false;

  return (
    <div
      ref={ref}
      className={cl(style.Slot, isActive && style.active, className)}
      data-active={isActive ? '' : undefined}
      {...props}
    >
      {char}
      {hasFakeCaret ? (
        <span className={style.Caret} aria-hidden="true" />
      ) : null}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    className={cl(style.Separator, className)}
    {...props}
  >
    {children ?? '–'}
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  REGEXP_ONLY_DIGITS,
};
