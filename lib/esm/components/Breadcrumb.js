/**
 * copy from `https://ui.shadcn.com/docs/components/breadcrumb`
 */
import * as React from 'react';
import style from './Breadcrumb.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import { Slot } from '@radix-ui/react-slot';
const Root = React.forwardRef(({ ...props }, ref) => React.createElement("nav", { ref: ref, "aria-label": "breadcrumb", ...props }));
Root.displayName = 'Breadcrumb';
const List = React.forwardRef(({ className, ...props }, ref) => (React.createElement("ol", { ref: ref, className: cl(style.List, className), ...props })));
List.displayName = 'List';
const Item = React.forwardRef(({ className, ...props }, ref) => (React.createElement("li", { ref: ref, className: cl(style.Item, className), ...props })));
Item.displayName = 'Item';
const Link = React.forwardRef(({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a';
    return React.createElement(Comp, { ref: ref, className: cl(style.Link, className), ...props });
});
Link.displayName = 'Link';
const Page = React.forwardRef(({ className, ...props }, ref) => (React.createElement("span", { ref: ref, role: "link", "aria-disabled": "true", "aria-current": "page", className: cl(style.Page, className), ...props })));
Page.displayName = 'Page';
const Separator = ({ children, className, ...props }) => (React.createElement("li", { role: "presentation", "aria-hidden": "true", className: cl(style.Separator, className), ...props }, children !== null && children !== void 0 ? children : (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-chevron-right" },
    React.createElement("path", { d: "m9 18 6-6-6-6" })))));
Separator.displayName = 'Separator';
const Ellipsis = ({ className, ...props }) => (React.createElement("span", { role: "presentation", "aria-hidden": "true", className: cl(style.Ellipsis, className), ...props },
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: cl(`lucide lucide-ellipsis`, style.moreHorizontal) },
        React.createElement("circle", { cx: 12, cy: 12, r: 1 }),
        React.createElement("circle", { cx: 19, cy: 12, r: 1 }),
        React.createElement("circle", { cx: 5, cy: 12, r: 1 })),
    React.createElement("span", { className: style.srOnly }, "More")));
Ellipsis.displayName = 'Ellipsis';
export const Breadcrumb = {
    Root,
    List,
    Item,
    Link,
    Page,
    Separator,
    Ellipsis,
};
export { Root, List, Item, Link, Page, Separator, Ellipsis };
//# sourceMappingURL=Breadcrumb.js.map