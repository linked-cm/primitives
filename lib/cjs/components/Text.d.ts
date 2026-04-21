import * as React from 'react';
interface TextProps extends React.HtmlHTMLAttributes<HTMLElement> {
    as?: 'span' | 'label' | 'p' | 'div';
    size?: 'small' | 'medium' | 'large' | 'default';
    children: React.ReactNode;
}
declare const Text: ({ as: Component, size, children, ...props }: TextProps) => React.JSX.Element;
export { Text };
