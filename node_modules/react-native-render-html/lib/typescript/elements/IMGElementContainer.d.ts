import { PropsWithChildren, ReactElement } from 'react';
import { ViewStyle, ViewProps } from 'react-native';
import { IMGElementProps } from './img-types';
/**
 * Container for the {@link IMGElement} component.
 */
export default function IMGElementContainer({ style, onPress, testID, children, ...otherProps }: PropsWithChildren<Pick<IMGElementProps, 'onPress' | 'testID'> & Omit<ViewProps, 'style'> & {
    style: ViewStyle;
}>): ReactElement;
