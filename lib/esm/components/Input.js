import * as React from 'react';
import style from './Input.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
const Input = React.forwardRef(({ className, type, size = 'medium', ...props }, ref) => {
    return (React.createElement("input", { type: type, className: cl(style.Root, size && style[size], className), ref: ref, ...props }));
});
Input.displayName = 'Input';
export { Input };
//# sourceMappingURL=Input.js.map