import * as React from 'react';

import style from './Heading.module.css';
import { cl } from '@_linked/react/utils/ClassNames';

interface HeadingProps extends React.HtmlHTMLAttributes<HTMLElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}
const Heading = ({
  as: Component,
  className,
  children,
  ...props
}: HeadingProps) => {
  const combinedClassName = cl(style.Root, className);

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
};

export { Heading };
