import { IncompleteImageDimensions, UseIMGElementStateProps } from './img-types';
export default function useIMGNormalizedSource({ source, specifiedDimensions }: Pick<UseIMGElementStateProps, 'source'> & {
    specifiedDimensions: IncompleteImageDimensions;
}): import("react-native").ImageURISource;
