"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HTMLContentModel = _interopRequireDefault(require("./HTMLContentModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const phrasingCategories = ['textual', 'edits', 'anchor'];
const translatableBlockCategories = ['tabular', 'grouping', 'sectioning'];
/**
 * An object to specify custom tags.
 *
 * @typeParam T - The name of the tag to which the model will apply.
 * @typeParam M - The {@link HTMLContentModel} associated with this tag.
 */

/**
 * An object defining engine internals for tags, such as default styles
 * (UAStyles), content model (how this tag is treated during hoisting)... etc.
 *
 * @typeParam T - The name of the tag to which the model will apply.
 * @typeParam M - The {@link HTMLContentModel} associated with this tag.
 */
class HTMLElementModel {
  /**
   * The tag name associated with this model.
   */

  /**
   * The {@link HTMLContentModel} attached to this model.
   */

  /**
   * An opaque element translated {@link TNode} will have no translated {@link TNode}
   * children.
   */

  /**
   * `true` when the associated tag is a {@link https://html.spec.whatwg.org/multipage/syntax.html#void-elements | void element}.
   *
   * @remarks
   *
   * - Void elements cannot have children.
   * - TText-translated void elements will be preserved even though they don't
   *   have children.
   */

  /**
   * Equivalent of "user-agent" styles. The default styles for the element.
   *
   * @remarks These styles will be merged over by `tagsStyles`.
   */

  /**
   * React Native props grouped by native components. Those props
   * will be passed to the underlying native component at render time.
   *
   * @remarks Some props might be overriden by props derived from the
   * {@link TNode} attributes. For example, if you pass `accessibilityLabel`
   * and there is an `aria-label` attribute attached to one node, the
   * `aria-label` will be used. If you want to be able to override the
   * `aria-label`, use {@link HTMLElementModel.getReactNativeProps} instead.
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

  /**
   * A function to create conditional "user-agent" styles.
   *
   * @deprecated Use {@link HTMLElementModel.getMixedUAStyles} instead.
   */

  /**
   * A function to create conditional "user-agent" styles.
   *
   * @remarks For example, &lt;a&gt; tags will have underline decoration and be
   * colored blue only when `href` is defined.
   */

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

  /**
   * Derive markers for one TNode.
   */
  constructor({
    tagName,
    contentModel,
    isOpaque,
    mixedUAStyles,
    isVoid,
    getUADerivedStyleFromAttributes,
    getMixedUAStyles,
    setMarkersForTNode,
    getReactNativeProps,
    reactNativeProps
  }) {
    _defineProperty(this, "tagName", void 0);

    _defineProperty(this, "contentModel", void 0);

    _defineProperty(this, "isOpaque", void 0);

    _defineProperty(this, "isVoid", void 0);

    _defineProperty(this, "mixedUAStyles", void 0);

    _defineProperty(this, "reactNativeProps", void 0);

    _defineProperty(this, "getUADerivedStyleFromAttributes", void 0);

    _defineProperty(this, "getMixedUAStyles", void 0);

    _defineProperty(this, "getReactNativeProps", void 0);

    _defineProperty(this, "setMarkersForTNode", void 0);

    this.tagName = tagName;
    this.contentModel = contentModel;
    this.isOpaque = isOpaque || false;
    this.isVoid = isVoid;
    this.mixedUAStyles = mixedUAStyles;
    this.getUADerivedStyleFromAttributes = getUADerivedStyleFromAttributes;
    this.getMixedUAStyles = getMixedUAStyles;
    this.setMarkersForTNode = setMarkersForTNode;
    this.getReactNativeProps = getReactNativeProps;
    this.reactNativeProps = reactNativeProps;
  }
  /**
   * Create an {@link HTMLElementModel} from a custom template.
   *
   * @param template - The custom template.
   */


  static fromCustomModel(template) {
    const {
      contentModel,
      tagName,
      isOpaque = false,
      isVoid = false,
      ...optionalFields
    } = template;
    return new HTMLElementModel({
      tagName,
      contentModel,
      isOpaque,
      isVoid,
      ...optionalFields
    });
  }
  /**
   * Create an {@link HTMLElementModel} from a native description.
   *
   * @param nativeElementModel - The native model declaration.
   */


  static fromNativeModel(nativeElementModel) {
    const {
      category,
      isOpaque,
      isVoid = false,
      ...otherProps
    } = nativeElementModel;
    const isPhrasing = phrasingCategories.indexOf(category) !== -1;
    const isTranslatable = isPhrasing || translatableBlockCategories.indexOf(category) !== -1;
    const contentModel = category === 'anchor' || category === 'edits' ? _HTMLContentModel.default.mixed : isPhrasing ? _HTMLContentModel.default.textual : isTranslatable ? _HTMLContentModel.default.block : _HTMLContentModel.default.none;
    return new HTMLElementModel({
      isVoid,
      contentModel: contentModel,
      isOpaque: isOpaque !== null && isOpaque !== void 0 ? isOpaque : category === 'embedded',
      ...otherProps
    });
  }

  isTranslatableBlock() {
    return this.contentModel === _HTMLContentModel.default.block;
  }

  isTranslatableTextual() {
    return this.contentModel === _HTMLContentModel.default.textual || this.contentModel === _HTMLContentModel.default.mixed;
  }
  /**
   * Create a new {@link HTMLElementModel} by shallow-merging properties into this model.
   *
   * @param merger - A function to generate the new properties to shallow-merge into this model.
   * @typeParam CM - The {@link HTMLContentModel} attached to the new model.
   */


  extend(arg) {
    const properties = typeof arg === 'function' ? arg(this) : arg;
    return new HTMLElementModel({ ...this,
      ...properties
    });
  }

}

exports.default = HTMLElementModel;
//# sourceMappingURL=HTMLElementModel.js.map