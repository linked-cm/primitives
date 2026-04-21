import * as React from 'react';
import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden';
const VisuallyHidden = React.forwardRef(({ ...props }, ref) => React.createElement(VisuallyHiddenPrimitive.Root, { ref: ref, ...props }));
VisuallyHidden.displayName = VisuallyHiddenPrimitive.Root.displayName;
export { VisuallyHidden };
//# sourceMappingURL=VisuallyHidden.js.map