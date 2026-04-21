import * as React from 'react';
import style from './Text.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
const Text = ({ as: Component = 'p', size = 'default', children, ...props }) => {
    return (React.createElement(Component, { className: cl(style.Root, style[size]), ...props }, children));
};
export { Text };
//# sourceMappingURL=Text.js.map