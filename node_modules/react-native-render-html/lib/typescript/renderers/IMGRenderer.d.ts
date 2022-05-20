import { TBlock } from '@native-html/transient-render-engine';
import { IMGElementProps } from '../elements/IMGElement';
import { InternalBlockRenderer } from '../render/render-types';
import { InternalRendererProps } from '../shared-types';
/**
 * A hook to produce props consumable by {@link IMGElement} component
 * from custom renderer props.
 */
export declare function useIMGElementProps(props: InternalRendererProps<TBlock>): IMGElementProps;
declare const IMGRenderer: InternalBlockRenderer;
export default IMGRenderer;
