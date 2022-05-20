import type { UseIMGElementStateProps, IMGElementState, IMGElementStateBase, IMGElementStateError, IMGElementStateSuccess } from './img-types';
import { ImageDimensions } from '../shared-types';
interface GetStateProps<C> extends Omit<IMGElementStateBase, 'dimensions'> {
    concreteDimensions: C;
    error: Error | null;
    initialDimensions: ImageDimensions;
    objectFit: UseIMGElementStateProps['objectFit'];
    onError?: (e: Error) => void;
}
export declare function getIMGState(props: GetStateProps<ImageDimensions>): IMGElementStateError | IMGElementStateSuccess;
export declare function getIMGState(props: GetStateProps<null | ImageDimensions>): IMGElementState;
export {};
