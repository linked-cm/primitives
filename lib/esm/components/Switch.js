import * as React from 'react';
import style from './Switch.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import * as SwitchPrimitives from '@radix-ui/react-switch';
const Switch = React.forwardRef(({ className, ...props }, ref) => (React.createElement(SwitchPrimitives.Root, { className: cl(style.Root, className), ...props, ref: ref },
    React.createElement(SwitchPrimitives.Thumb, { className: cl(style.Thumb) }))));
Switch.displayName = SwitchPrimitives.Root.displayName;
export { Switch };
//# sourceMappingURL=Switch.js.map