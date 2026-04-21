import * as React from 'react';
import style from './Separator.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
const Separator = React.forwardRef(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (React.createElement(SeparatorPrimitive.Root, { ref: ref, decorative: decorative, orientation: orientation, className: cl(style.Root, className), ...props })));
Separator.displayName = SeparatorPrimitive.Root.displayName;
export { Separator };
//# sourceMappingURL=Separator.js.map