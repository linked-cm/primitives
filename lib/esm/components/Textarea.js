import * as React from 'react';
import style from './Textarea.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement("textarea", { className: cl(style.Root, className), ref: ref, ...props }));
});
Textarea.displayName = 'Textarea';
export { Textarea };
//# sourceMappingURL=Textarea.js.map