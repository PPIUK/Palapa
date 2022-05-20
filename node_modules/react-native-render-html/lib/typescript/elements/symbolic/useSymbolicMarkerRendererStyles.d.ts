import { UnitaryCounterRendererProps } from '../../shared-types';
export default function useSymbolicMarkerRendererProps(props: UnitaryCounterRendererProps, shrinkFactor?: number): {
    prefixSize: number;
    prefixStyle: {
        width: number;
        height: number;
        top: number;
    };
};
