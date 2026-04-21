import * as React from 'react';

import style from './Input.module.css';
import { cl } from '@_linked/react/utils/ClassNames';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'small' | 'medium' | 'large';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size = 'medium', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cl(style.Root, size && style[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
