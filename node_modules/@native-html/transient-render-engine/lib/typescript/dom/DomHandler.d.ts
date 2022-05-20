import { DomHandler as OriginalDomHandler, DomHandlerOptions as OriginalDomHandlerOptions, Document, Element, Node, Text, NodeWithChildren } from 'domhandler';
/**
 * A record of callback to visit the DOM.
 *
 * @public
 */
export interface DomVisitorCallbacks {
    /**
     * A callback invoked when encountering a {@link Document}.
     *
     * @param document - The document to visit.
     *
     */
    onDocument?(document: Document): void;
    /**
     * A callback invoked when encountering an {@link Element}.
     *
     * @param element - The element to visit.
     */
    onElement?(element: Element): void;
    /**
     * A callback invoked when encountering a {@link Text} node.
     *
     * @param text - The text to visit.
     */
    onText?(text: Text): void;
}
export interface DomHandlerOptions extends OriginalDomHandlerOptions {
    ignoredTags?: string[];
    visitors?: DomVisitorCallbacks;
    ignoreNode?: (node: Node, parent: NodeWithChildren) => boolean | void | unknown;
}
export default class DomHandler extends OriginalDomHandler {
    private ignoredTags;
    private ignoredTagsCount;
    private visitors;
    constructor(options: DomHandlerOptions);
    isIgnored(node: Node): boolean | unknown | void;
    addNode(node: Node): void;
    ontext(text: string): void;
    onopentag(name: string, attribs: any): void;
    onclosetag(): void;
    onend(): void;
}
