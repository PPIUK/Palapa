import { TBlock } from '@native-html/transient-render-engine';
import { InternalBlockRenderer } from '../render/render-types';
import { InternalRendererProps } from '../shared-types';
import { OLElementProps } from '../elements/OLElement';
export declare function useOLElementProps(props: InternalRendererProps<TBlock>): OLElementProps;
declare const OLRenderer: InternalBlockRenderer;
export default OLRenderer;
