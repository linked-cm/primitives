import * as React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: 'solid' | 'outline' | 'ghost' | 'link';
    color?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large' | 'default';
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
