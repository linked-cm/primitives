import * as React from 'react';

import style from './Textarea.module.css';
import { cl } from '@_linked/react/utils/ClassNames';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea className={cl(style.Root, className)} ref={ref} {...props} />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
