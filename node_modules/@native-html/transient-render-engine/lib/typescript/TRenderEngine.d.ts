import { ParserOptions as HTMLParserOptions } from 'htmlparser2';
import { CSSProcessorConfig } from '@native-html/css-processor';
import { StylesConfig } from './styles/types';
import { HTMLModelRecord, TagName } from './model/model-types';
import { DefaultHTMLElementModelsStatic } from './model/defaultHTMLElementModels';
import { Document, Element, Node, NodeWithChildren } from './dom/dom-utils';
import { SetMarkersForTNode, TDocument } from './tree/tree-types';
import { DomVisitorCallbacks } from './dom/DomHandler';
export interface TRenderEngineOptions<E extends string = never> {
    /**
     * Customization for CSS inline processing.
     */
    readonly cssProcessorConfig?: Partial<CSSProcessorConfig>;
    /**
     * Options for htmlparser2 library parser.
     */
    readonly htmlParserOptions?: Readonly<HTMLParserOptions>;
    /**
     * Various configuration for styling.
     */
    readonly stylesConfig?: StylesConfig;
    /**
     * Customize supported tags in the engine.
     *
     * @remarks If you need to add new tags, always use lowercase names.
     */
    readonly customizeHTMLModels?: (defaultHTMLElementModels: DefaultHTMLElementModelsStatic) => HTMLModelRecord<TagName | E>;
    /**
     * Remove line breaks around special east-asian characters such as defined here:
     * https://www.w3.org/TR/2020/WD-css-text-3-20200429/#line-break-transform
     *
     * @defaultValue false
     */
    readonly removeLineBreaksAroundEastAsianDiscardSet?: boolean;
    /**
     * A list of tags which should not be included in the DOM.
     */
    readonly ignoredDomTags?: string[];
    /**
     * An object which callbacks will be invoked when a DOM element or text node
     * has been parsed and its children attached.
     *
     * @remark Each callback is applied during parsing, thus with very little
     * overhead. However, it means that one node next siblings won't be
     * available. If you need some siblings logic, apply this logic to the
     * children of this node.
     */
    readonly domVisitors?: DomVisitorCallbacks;
    /**
     * Ignore specific DOM nodes.
     *
     * **Warning**: when this function is invoked, the node has not yet been
     * attached to its parent or siblings. Use the second argument (`parent`)
     * if you need to perform logic based on parent.
     *
     * @remarks The function is applied during parsing, thus with very little
     * overhead. However, it means that one node next siblings won't be
     * available.
     *
     * @returns `true` if this node should not be included in the DOM, anything
     * else otherwise.
     */
    readonly ignoreDomNode?: (node: Node, parent: NodeWithChildren) => boolean | void | unknown;
    /**
     * Select the DOM root before TTree generation. For example, you could
     * iterate over children until you reach an article element and return this
     * element.
     *
     * @remarks Applied after DOM parsing, before normalization and TTree
     * construction. Before normalization implies that a body will be added in
     * the tree **after** selecting root.
     */
    readonly selectDomRoot?: (node: NodeWithChildren) => any;
    /**
     * Customize markers logic by extracting markers from TNode properties such
     * as classes, ids, attributes, tagName ...
     *
     * @remarks If you are using JavaScript, you can use module augmentation and
     * declaration merging to add properties to the {@link Markers} shape.
     */
    readonly setMarkersForTNode?: SetMarkersForTNode;
    /**
     * Disable hoisting. Note that your layout might break!
     */
    readonly dangerouslyDisableHoisting?: boolean;
    /**
     * Disable whitespace collapsing. Especially useful if your html is
     * being pre-processed server-side with a minifier.
     */
    readonly dangerouslyDisableWhitespaceCollapsing?: boolean;
}
/**
 * The Transient Render Engine.
 *
 * @public
 */
export declare class TRenderEngine {
    private htmlParserOptions;
    private dataFlowParams;
    private hoistingEnabled;
    private whitespaceCollapsingEnabled;
    private selectDomRoot;
    constructor(options?: TRenderEngineOptions);
    private normalizeDocument;
    parseDocument(html: string): Document;
    buildTTreeFromDoc(document: Document | Element): TDocument;
    buildTTree(html: string): TDocument;
    getHTMLElementsModels(): HTMLModelRecord<string, import(".").HTMLContentModel>;
}
