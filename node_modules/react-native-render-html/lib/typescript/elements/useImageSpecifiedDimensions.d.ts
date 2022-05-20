import { UseIMGElementStateProps, IncompleteImageDimensions } from './img-types';
export default function useImageSpecifiedDimensions(props: UseIMGElementStateProps): {
    flatStyle: import("react-native").ImageStyle;
    specifiedDimensions: IncompleteImageDimensions;
};
