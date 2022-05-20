import { ReactElement } from 'react';
import type { IMGElementProps } from './img-types';
export type { IMGElementProps } from './img-types';
declare function identity(arg: any): any;
/**
 * A component to render images based on an internal loading state.
 *
 * @remarks This component will attempt to draw a box of paint dimensions
 * before retrieving the physical dimensions of the image to avoid layout
 * shifts. See also {@link useIMGElementState}, {@link IMGElementContainer},
 * {@link IMGElementContentSuccess}, {@link IMGElementContentLoading}
 * and {@link IMGElementContentError} for customization.
 */
declare function IMGElement(props: IMGElementProps): ReactElement;
declare namespace IMGElement {
    var propTypes: Record<keyof IMGElementProps, any>;
    var defaultProps: {
        enableExperimentalPercentWidth: boolean;
        computeMaxWidth: typeof identity;
        imagesInitialDimensions: import("..").ImageDimensions;
        style: {};
    };
}
export default IMGElement;
