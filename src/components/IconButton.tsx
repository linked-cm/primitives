import * as React from 'react';

import style from './IconButton.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import { Slot } from '@radix-ui/react-slot';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'solid' | 'outline' | 'ghost';
  // TODO: how handle custom colors like red for danger, yellow for warning??
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large' | 'default';
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
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
IconButton.displayName = 'IconButton';

export { IconButton };
