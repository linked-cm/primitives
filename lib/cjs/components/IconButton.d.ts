import * as React from 'react';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: 'solid' | 'outline' | 'ghost';
    color?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large' | 'default';
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { IconButton };
