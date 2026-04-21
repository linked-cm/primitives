import * as React from 'react';
import style from './Typography.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
const Typography = ({ as: Component = 'p', size = 'default', className, children, ...props }) => {
    const combinedClassName = cl(style.Root, style[size], className);
    return (React.createElement(Component, { className: combinedClassName, ...props }, children));
};
export { Typography };
//# sourceMappingURL=Typography.js.map