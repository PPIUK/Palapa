import { PropsWithChildren, ReactElement } from 'react';
import { IMGElementStateBase } from './img-types';
/**
 * Alt view for the {@link IMGElement} component.
 */
export default function IMGElementContentAlt({ dimensions, alt, altColor, testID, children }: PropsWithChildren<IMGElementStateBase & {
    testID?: string;
}>): ReactElement;
