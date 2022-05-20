import { TNode } from '@native-html/transient-render-engine';
/**
 * Compute top collapsed margin for the nth {@link TNode}-child of a list of
 * TNodes.
 *
 * @param n - The index for which the top margin should be collapsed.
 * @param tchildren - The list of {@link TNode} children.
 * @returns `null` when no margin collapsing should apply, a number otherwise.
 * @public
 */
export default function collapseTopMarginForChild(n: number, tchildren: readonly TNode[]): number | null;
