import { MarkerBoxProps } from '@jsamr/react-native-li';
import { PropsWithChildren } from 'react';
import { ListStyleSpec } from '../shared-types';
export declare function useListStyleSpecs(): Record<string, ListStyleSpec & {
    renderMarker?: ((props: MarkerBoxProps) => any) | undefined;
}>;
export default function ListStyleSpecsProvider({ children }: PropsWithChildren<{}>): JSX.Element;
