import * as React from 'react';
import style from './Label.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import * as LabelPrimitive from '@radix-ui/react-label';
const Label = React.forwardRef(({ className, ...props }, ref) => (React.createElement(LabelPrimitive.Root, { ref: ref, className: cl(style.Root, className), ...props })));
Label.displayName = LabelPrimitive.Root.displayName;
export { Label };
//# sourceMappingURL=Label.js.map