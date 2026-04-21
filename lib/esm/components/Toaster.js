// https://ui.shadcn.com/docs/components/toast
import * as React from 'react';
import { useToast } from '../hooks/use-toast.js';
import { Toast } from './Toast.js';
export function Toaster() {
    const { toasts } = useToast();
    return (React.createElement(Toast.Provider, null,
        toasts.map(function ({ id, title, description, action, ...props }) {
            return (React.createElement(Toast.Root, { key: id, ...props },
                React.createElement("div", null,
                    title && React.createElement(Toast.Title, null, title),
                    description && (React.createElement(Toast.Description, null, description))),
                action,
                React.createElement(Toast.Close, null)));
        }),
        React.createElement(Toast.Viewport, null)));
}
//# sourceMappingURL=Toaster.js.map