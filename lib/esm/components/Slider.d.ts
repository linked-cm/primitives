import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
declare const Track: React.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderTrackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const Range: React.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderRangeProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const Thumb: React.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderThumbProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const Root: React.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export declare const Slider: {
    Root: React.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    Track: React.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderTrackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    Range: React.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderRangeProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    Thumb: React.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderThumbProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
};
export { Root, Track, Range, Thumb };
