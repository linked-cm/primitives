import * as React from 'react';
interface HeadingProps extends React.HtmlHTMLAttributes<HTMLElement> {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
}
declare const Heading: ({ as: Component, className, children, ...props }: HeadingProps) => React.JSX.Element;
export { Heading };
