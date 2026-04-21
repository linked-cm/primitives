import * as React from 'react';
import style from './RadioGroup.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
const Root = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement(RadioGroupPrimitive.Root, { className: cl(style.Root, className), ...props, ref: ref }));
});
Root.displayName = RadioGroupPrimitive.Root.displayName;
const Item = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement(RadioGroupPrimitive.Item, { ref: ref, className: cl(style.Item, className), ...props },
        React.createElement(RadioGroupPrimitive.Indicator, { className: style.Indicator })));
});
Item.displayName = RadioGroupPrimitive.Item.displayName;
export const RadioGroup = {
    Root,
    Item,
};
export { Root, Item };
//# sourceMappingURL=RadioGroup.js.map