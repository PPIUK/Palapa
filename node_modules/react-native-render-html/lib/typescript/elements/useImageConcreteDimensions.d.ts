import { ImageStyle } from 'react-native';
import { ImageDimensions } from '../shared-types';
import { IncompleteImageDimensions, UseIMGElementStateProps } from './img-types';
export declare type ConcreteDimensionsProps = {
    flatStyle: ImageStyle;
    naturalDimensions: ImageDimensions | null;
    specifiedDimensions: IncompleteImageDimensions;
} & Pick<UseIMGElementStateProps, 'computeMaxWidth' | 'contentWidth'>;
export default function useImageConcreteDimensions<P extends ConcreteDimensionsProps>({ flatStyle, naturalDimensions, specifiedDimensions, computeMaxWidth, contentWidth }: P): P['naturalDimensions'] extends ImageDimensions ? ImageDimensions : ImageDimensions | null;
