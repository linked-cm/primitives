/**
 * copy from `https://ui.shadcn.com/docs/components/breadcrumb`
 */

import * as React from 'react';

import style from './Breadcrumb.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import { Slot } from '@radix-ui/react-slot';

const Root = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Root.displayName = 'Breadcrumb';

const List = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
  <ol ref={ref} className={cl(style.List, className)} {...props} />
));
List.displayName = 'List';

const Item = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cl(style.Item, className)} {...props} />
));
Item.displayName = 'Item';

const Link = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a';

  return <Comp ref={ref} className={cl(style.Link, className)} {...props} />;
});
Link.displayName = 'Link';

const Page = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cl(style.Page, className)}
    {...props}
  />
));
Page.displayName = 'Page';

const Separator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cl(style.Separator, className)}
    {...props}
  >
    {children ?? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chevron-right"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    )}
  </li>
);
Separator.displayName = 'Separator';

const Ellipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cl(style.Ellipsis, className)}
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cl(`lucide lucide-ellipsis`, style.moreHorizontal)}
    >
      <circle cx={12} cy={12} r={1} />
      <circle cx={19} cy={12} r={1} />
      <circle cx={5} cy={12} r={1} />
    </svg>
    <span className={style.srOnly}>More</span>
  </span>
);
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
