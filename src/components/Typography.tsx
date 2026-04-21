import * as React from 'react';

import style from './Typography.module.css';
import { cl } from '@_linked/react/utils/ClassNames';

interface TypographyProps extends React.HtmlHTMLAttributes<HTMLElement> {
  as?: 'span' | 'label' | 'p' | 'div';
  size?: 'small' | 'medium' | 'large' | 'default';
  children: React.ReactNode;
}
const Typography = ({
  as: Component = 'p',
  size = 'default',
  className,
  children,
  ...props
}: TypographyProps) => {
  const combinedClassName = cl(style.Root, style[size], className);

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
};

export { Typography };
