import * as React from 'react';
import style from './Tooltip.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
function extend(Component, baseClassName) {
    let extended = React.forwardRef(({ className, ...props }, ref) => React.createElement(Component, {
        ref,
        className: cl(baseClassName, className),
        ...props,
    }));
    extended.displayName = Component.displayName;
    return extended;
}
const Provider = TooltipPrimitive.Provider;
const Root = TooltipPrimitive.Root;
const Trigger = TooltipPrimitive.Trigger;
const Arrow = extend(TooltipPrimitive.Arrow, style.Arrow);
const Content = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (React.createElement(TooltipPrimitive.Content, { ref: ref, sideOffset: sideOffset, className: cl(style.Content, className), ...props })));
Content.displayName = TooltipPrimitive.Content.displayName;
export const Tooltip = {
    Root,
    Provider,
    Trigger,
    Arrow,
    Content,
};
export { Root, Provider, Trigger, Arrow, Content };
//# sourceMappingURL=Tooltip.js.map