import * as React from 'react';
import style from './ToggleGroup.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
const Root = React.forwardRef(({ className, children, ...props }, ref) => (React.createElement(ToggleGroupPrimitive.Root, { ref: ref, className: cl(style.Root, className), ...props }, children)));
const Item = React.forwardRef(({ className, children, ...props }, ref) => {
    return (React.createElement(ToggleGroupPrimitive.Item, { ref: ref, className: cl(style.Item, className), ...props }, children));
});
Item.displayName = ToggleGroupPrimitive.Item.displayName;
export const ToggleGroup = {
    Root,
    Item,
};
export { Root, Item };
//# sourceMappingURL=ToggleGroup.js.map