import * as React from 'react';
import style from './IconButton.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import { Slot } from '@radix-ui/react-slot';
const IconButton = React.forwardRef(({ className, variant = 'solid', color = 'primary', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = props.disabled;
    return (React.createElement(Comp, { className: cl(style.Root, style[variant], style[color], style[size], isDisabled && style.disabled, className), ref: ref, ...props }));
});
IconButton.displayName = 'IconButton';
export { IconButton };
//# sourceMappingURL=IconButton.js.map