import * as React from 'react';
import style from './Heading.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
const Heading = ({ as: Component, className, children, ...props }) => {
    const combinedClassName = cl(style.Root, className);
    return (React.createElement(Component, { className: combinedClassName, ...props }, children));
};
export { Heading };
//# sourceMappingURL=Heading.js.map