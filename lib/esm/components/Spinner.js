import React from 'react';
import style from './Spinner.module.css';
export function Spinner({ active = true }) {
    return (React.createElement("div", { className: [style.spinner, active && style.active].join(' '), role: "progressbar", "aria-busy": active ? 'true' : 'false' }));
}
//# sourceMappingURL=Spinner.js.map