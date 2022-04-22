import type { TAnimationStyle } from 'src/layouts/BaseLayout';
import type { TInitializeCarouselProps } from './useInitProps';
declare type TLayoutConfigOpts<T> = TInitializeCarouselProps<T> & {
    size: number;
};
export declare function useLayoutConfig<T>(opts: TLayoutConfigOpts<T>): TAnimationStyle;
export {};
