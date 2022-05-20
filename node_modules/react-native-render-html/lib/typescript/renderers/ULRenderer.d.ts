import { InternalBlockRenderer } from '../render/render-types';
import { InternalRendererProps } from '../shared-types';
import { TBlock } from '@native-html/transient-render-engine';
import { ULElementProps } from '../elements/ULElement';
export declare function useULElementProps(props: InternalRendererProps<TBlock>): ULElementProps;
declare const ULRenderer: InternalBlockRenderer;
export default ULRenderer;
