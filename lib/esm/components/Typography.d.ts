import * as React from 'react';
interface TypographyProps extends React.HtmlHTMLAttributes<HTMLElement> {
    as?: 'span' | 'label' | 'p' | 'div';
    size?: 'small' | 'medium' | 'large' | 'default';
    children: React.ReactNode;
}
declare const Typography: ({ as: Component, size, className, children, ...props }: TypographyProps) => React.JSX.Element;
export { Typography };
