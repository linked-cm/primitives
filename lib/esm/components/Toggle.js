import * as React from 'react';
import style from './Toggle.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import * as TogglePrimitive from '@radix-ui/react-toggle';
const Root = React.forwardRef(({ className, ...props }, ref) => (React.createElement(TogglePrimitive.Root, { ref: ref, className: cl(style.Root, className), ...props })));
Root.displayName = TogglePrimitive.Root.displayName;
export const Toggle = {
    Root,
};
export { Root };
//# sourceMappingURL=Toggle.js.map