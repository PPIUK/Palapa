import { UseIMGElementStateProps, IMGElementState } from './img-types';
/**
 * This hook will compute concrete dimensions from image natural dimensions and
 * constraints. It will fetch the image and get its dimensions.
 *
 * @remarks If you know the dimensions beforehand, use
 * {@link useIMGElementStateWithCache} instead to save a network request and
 * prevent a layout shift.
 */
export default function useIMGElementState(props: UseIMGElementStateProps): IMGElementState;
