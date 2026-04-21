import * as React from 'react';

import style from './Button.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large' | 'default';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'solid',
      color = 'primary',
      size = 'default',
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = props.disabled;

    return (
      <Comp
        className={cl(
          style.Root,
          style[variant],
          style[color],
          style[size],
          isDisabled && style.disabled,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
