import * as React from 'react';

import style from './Text.module.css';
import { cl } from '@_linked/react/utils/ClassNames';

interface TextProps extends React.HtmlHTMLAttributes<HTMLElement> {
  as?: 'span' | 'label' | 'p' | 'div';
  size?: 'small' | 'medium' | 'large' | 'default';
  children: React.ReactNode;
}
const Text = ({
  as: Component = 'p',
  size = 'default',
  children,
  ...props
}: TextProps) => {
  return (
    <Component className={cl(style.Root, style[size])} {...props}>
      {children}
    </Component>
  );
};

export { Text };
