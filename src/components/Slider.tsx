import * as React from 'react';

import style from './Slider.module.css';
import { cl } from '@_linked/react/utils/ClassNames';

import * as SliderPrimitive from '@radix-ui/react-slider';

function extend<C extends React.FunctionComponent<any>>(
  Component: C,
  baseClassName: string
) {
  let extended = React.forwardRef<
    React.ElementRef<C>,
    React.ComponentPropsWithoutRef<C>
  >(({ className, ...props }, ref) =>
    React.createElement(Component, {
      ref,
      className: cl(baseClassName, className),
      ...props,
    })
  );
  extended.displayName = Component.displayName;
  return extended;
}

const Track = extend(SliderPrimitive.Track, style.Track);
const Range = extend(SliderPrimitive.Range, style.Range);
const Thumb = extend(SliderPrimitive.Thumb, style.Thumb);

const Root = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cl(style.Root, className)}
    {...props}
  >
    <Track>
      <Range />
    </Track>
    <Thumb />
  </SliderPrimitive.Root>
));
Root.displayName = SliderPrimitive.Root.displayName;

export const Slider = {
  Root,
  Track,
  Range,
  Thumb,
};

export { Root, Track, Range, Thumb };
