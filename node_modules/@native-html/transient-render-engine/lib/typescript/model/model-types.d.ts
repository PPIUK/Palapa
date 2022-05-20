import { MixedStyleDeclaration } from '@native-html/css-processor';
import { Element } from 'domhandler';
import { ReactNativePropsDefinitions, ReactNativePropsSwitch } from '../helper-types';
import { ExtractTNodeFromType, Markers, SetMarkersForTNode, TNodeDescriptor, TNodeType } from '../tree/tree-types';
import HTMLContentModel from './HTMLContentModel';
import HTMLElementModel from './HTMLElementModel';
export declare type ElementCategory = 'anchor' | 'textual' | 'tabular' | 'edits' | 'embedded' | 'sectioning' | 'grouping' | 'interactive' | 'untranslatable';
export declare type TagName = AnchorTagName | TextLevelTagNames | EditsTagNames | EmbeddedTagNames | TabularTagNames | GroupingTagNames | SectioningTagNames | InteractiveTagNames | UntranslatableTagNames;
export declare type AnchorTagName = 'a';
export declare type TabularTagNames = 'table' | 'tbody' | 'thead' | 'tfoot' | 'tr' | 'td' | 'th';
export declare type GroupingTagNames = 'p' | 'hr' | 'pre' | 'blockquote' | 'ol' | 'ul' | 'dir' | 'menu' | 'li' | 'dl' | 'dt' | 'dd' | 'figure' | 'figcaption' | 'main' | 'div' | 'xmp' | 'listing' | 'plaintext';
export declare type AttribTagNames = 'accesskey' | 'datalist' | 'source' | 'track' | 'caption' | 'colgroup' | 'col' | 'option' | 'optgroup' | 'param';
export declare type MetadataTagNames = 'head' | 'title' | 'base' | 'link' | 'meta';
export declare type InteractiveTagNames = 'form' | 'label' | 'input' | 'button' | 'select' | 'progress' | 'meter' | 'fieldset' | 'legend' | 'textarea' | 'output' | 'details' | 'summary' | 'dialog';
export declare type UnsupportedTagNames = 'area' | 'map';
export declare type UntranslatableTagNames = AttribTagNames | UnsupportedTagNames | MetadataTagNames;
export declare type EmbeddedTagNames = 'audio' | 'canvas' | 'embed' | 'iframe' | 'img' | 'math' | 'object' | 'picture' | 'svg' | 'video';
export declare type EditsTagNames = 'ins' | 'del';
export declare type SectioningTagNames = 'body' | 'article' | 'section' | 'nav' | 'aside' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hgroup' | 'header' | 'footer' | 'address';
export declare type TextLevelTagNames = 'em' | 'strong' | 'strike' | 'small' | 'big' | 's' | 'cite' | 'q' | 'dfn' | 'abbr' | 'acronym' | 'ruby' | 'rt' | 'rp' | 'data' | 'time' | 'tt' | 'code' | 'var' | 'samp' | 'kbd' | 'sup' | 'sub' | 'i' | 'b' | 'u' | 'mark' | 'bdi' | 'bdo' | 'span' | 'br' | 'wbr';
/**
 * @public
 */
export declare type HTMLModelRecord<T extends string = TagName, M extends HTMLContentModel = HTMLContentModel> = {
    [k in T]: HTMLElementModel<k, M>;
};
/**
 * @typeParam T - The name of the tag to which the model will apply.
 */
export interface ElementModelBase<T extends string> {
    /**
     * The tag name associated with this model.
     */
    readonly tagName: T;
    /**
     * An opaque element translated {@link TNode} will have no translated {@link TNode}
     * children.
     */
    readonly isOpaque?: boolean;
    /**
     * Equivalent of "user-agent" styles. The default styles for the element.
     *
     * @remarks These styles will be merged over by `tagsStyles`.
     */
    readonly mixedUAStyles?: MixedStyleDeclaration;
    /**
     * React Native props grouped by native components. Those props
     * will be passed to the underlying native component at render time.
     *
     * @remarks Some props might be overriden by props derived from the
     * {@link TNode} attributes. For example, if you pass `accessibilityLabel`
     * and there is an `aria-label` attribute attached to one node, the
     * `aria-label` will be used. If you want to be able to override the
     * `aria-label`, use {@link ElementModelBase.getReactNativeProps} instead.
     *
     * @example
     *
     * ```ts
     * import {HTMLElementModel, HTMLContentModel} from 'react-native-render-html';
     *
     * const customHTMLElementModels = {
     *  'nav-button': HTMLElementModel.fromCustomModel({
     *    tagName: 'nav-button',
     *    contentModel: HTMLContentModel.block,
     *    reactNativeProps: {
     *      native: {
     *        onPress() {
     *          console.info('nav-button pressed');
     *        },
     *      },
     *    },
     *  }),
     *};
     * ```
     */
    readonly reactNativeProps?: ReactNativePropsDefinitions;
    /**
     * `true` when the associated tag is a {@link https://html.spec.whatwg.org/multipage/syntax.html#void-elements | void element}.
     *
     * @remarks
     *
     * - Void elements cannot have children.
     * - TText-translated void elements will be preserved even though they don't
     *   have children.
     */
    readonly isVoid?: boolean;
    /**
     * Derive markers for one TNode.
     */
    setMarkersForTNode?: SetMarkersForTNode;
    /**
     * A function to create conditional "user-agent" styles.
     *
     * @deprecated Use {@link ElementModelBase.getMixedUAStyles} instead.
     */
    getUADerivedStyleFromAttributes?: (attributes: Record<string, string>, markers: Markers) => MixedStyleDeclaration | null;
    /**
     * A function to create conditional "user-agent" styles.
     *
     * @remarks For example, &lt;a&gt; tags will have underline decoration and be
     * colored blue only when `href` is defined.
     */
    getMixedUAStyles?: (tnode: TNodeDescriptor, element: Element) => MixedStyleDeclaration | null | undefined | void;
    /**
     * A function to create React Native props from a {@link TNode} grouped by
     * native components.
     *
     * Those props will be deep-merged over the pre-generated props. You can
     * preserve some of the pre-generated props since you receive them as second
     * argument.
     *
     * **Merge strategy** (latest overrides former):
     *
     * 1. props from `reactNativeProps`,
     * 2. auto-generated props from attributes
     * 3. props returned by this function
     *
     * @param tnode - The {@link TNode} for which to create React Native props.
     * @param preGeneratedProps - The props that were pre-generated for the {@link TNode}
     * based on attributes (e.g. aria-label ...) and
     * {@link ElementModelBase.reactNativeProps}.
     * @returns React Native props grouped by native components (see
     * {@link ReactNativePropsDefinitions}). Those props will be passed to the
     * underlying native component at render time.
     *
     * @example
     *
     * ```ts
     * import { defaultHTMLElementModels } from "react-native-render-html";
     *
     * const customHTMLElementModels = {
     *   a: defaultHTMLElementModels.a.extend({
     *     getReactNativeProps(tnode) {
     *       const attributes = tnode.attributes;
     *       return {
     *         native: {
     *           accessibilityHint:
     *             attributes['data-scope'] === 'internal'
     *               ? 'Open in a new screen.'
     *               : 'Open in system web browser.',
     *         },
     *       };
     *     },
     *   }),
     * };
     * ```
     */
    getReactNativeProps?: (tnode: ExtractTNodeFromType<TNodeType>, preGeneratedProps: ReactNativePropsSwitch | null, element: Element) => ReactNativePropsDefinitions | null | undefined | void;
}
/**
 * An object to specify custom tags.
 *
 * @typeParam T - The name of the tag to which the model will apply.
 * @typeParam M - The {@link HTMLContentModel} associated with this tag.
 */
export interface CustomElementModel<T extends string, M extends HTMLContentModel> extends ElementModelBase<T> {
    /**
     * The {@link HTMLContentModel} attached to this model.
     */
    readonly contentModel: M;
    /**
     * The tag name associated with this model.
     */
    readonly tagName: T;
}
/**
 * An object to specify tags parts of the HTML4 and HTML5 standards.
 *
 * @typeParam T - The name of the tag to which the model will apply.
 * @typeParam C - The {@link ElementCategory} associated with this tag.
 */
export interface NativeElementModel<T extends string = TagName, C = ElementCategory> extends ElementModelBase<T> {
    /**
     * The category of this element as per HTML5 standard.
     */
    readonly category: C;
}
