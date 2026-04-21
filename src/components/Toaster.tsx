// https://ui.shadcn.com/docs/components/toast
import * as React from 'react';

import style from './Toast.module.css';
import { useToast } from '../hooks/use-toast.js';
import { Toast } from './Toast.js';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <Toast.Provider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast.Root key={id} {...props}>
            <div>
              {title && <Toast.Title>{title}</Toast.Title>}
              {description && (
                <Toast.Description>{description}</Toast.Description>
              )}
            </div>
            {action}
            <Toast.Close />
          </Toast.Root>
        );
      })}
      <Toast.Viewport />
    </Toast.Provider>
  );
}
