import { Node } from '@native-html/transient-render-engine';
/**
 * Convert a DOM node to its HTML representation.
 *
 * @param root - The root to stringify.
 * @param reporter - An optional function which will receive every
 * parsed node as 1st argument, the depth as 2d argument and the converted html
 * as 3d argument.
 */
export default function domNodeToHTMLString(root: Node | null, reporter?: DomNodeToHtmlReporter, depth?: number): string;
/**
 * @public
 */
export interface DomNodeToHtmlReporter {
    /**
     * @param node - The node being parsed.
     * @param depth - How many parents this node have.
     * @param html - The HTML representation of this node and its children.
     */
    (node: Node | null, depth: number, html: string): void;
}
