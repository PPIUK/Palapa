import { TNode } from '@native-html/transient-render-engine';
/**
 * Compute a TNode top margin to satisfy requirements expressed in CSS
 * standard regarding margin collapsing.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
 * for a reference.
 *
 * @param precedent - The node above the one for which we need to compute top margin.
 * @param current - The node for which a margin top might collapse.
 */
export default function getCollapsedMarginTop(precedent: TNode, current: TNode): null | number;
