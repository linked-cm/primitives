import * as React from 'react';
import style from './Progress.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import * as ProgressPrimitive from '@radix-ui/react-progress';
function extend(Component, baseClassName) {
    let extended = React.forwardRef(({ className, ...props }, ref) => React.createElement(Component, {
        ref,
        className: cl(baseClassName, className),
        ...props,
    }));
    extended.displayName = Component.displayName;
    return extended;
}
const Indicator = extend(ProgressPrimitive.Indicator, style.Indicator);
const Root = React.forwardRef(({ className, value, ...props }, ref) => (React.createElement(ProgressPrimitive.Root, { ref: ref, className: cl(style.Root, className), ...props },
    React.createElement(Indicator, { className: style.Indicator, style: { transform: `translateX(-${100 - (value || 0)}%)` } }))));
Root.displayName = ProgressPrimitive.Root.displayName;
export const Progress = {
    Root,
    Indicator,
};
export { Root, Indicator };
//# sourceMappingURL=Progress.js.map