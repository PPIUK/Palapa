"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _domutils = require("domutils");

var _HTMLContentModel = _interopRequireDefault(require("./HTMLContentModel"));

var _HTMLElementModel = _interopRequireDefault(require("./HTMLElementModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UA_ANCHOR_COL = '#245dc1';
const UA_GRAY = '#CCC';
const UA_MARGIN_HZ = 30;
const bigMarginTopBottomStyle = {
  marginTop: '1em',
  marginBottom: '1em'
};
const shortMarginTopBottomStyle = {
  marginTop: '.5em',
  marginBottom: '.5em'
};
const lineThroughStyle = {
  textDecorationLine: 'line-through'
};
const italicStyle = {
  fontStyle: 'italic'
};
const monoStyle = {
  fontFamily: 'monospace'
};
const boldStyle = {
  fontWeight: 'bold'
};
const spacedBlockStyle = { ...bigMarginTopBottomStyle,
  marginLeft: UA_MARGIN_HZ,
  marginRight: UA_MARGIN_HZ
};
const anchorStyle = {
  color: UA_ANCHOR_COL,
  textDecorationLine: 'underline',
  textDecorationColor: UA_ANCHOR_COL
};
const leftBorderQuoteStyle = {
  borderLeftWidth: 2,
  borderLeftColor: UA_GRAY
};
const dottedUnderlineStyle = {
  textDecorationLine: 'underline',
  textDecorationStyle: 'dotted'
};
const solidUnderlineStyle = {
  textDecorationLine: 'underline',
  textDecorationStyle: 'solid'
}; // TODO, support directional styles

const listStyles = { ...bigMarginTopBottomStyle,
  paddingLeft: 30
};
const preStyles = {
  whiteSpace: 'pre',
  ...monoStyle,
  ...bigMarginTopBottomStyle
};

function headerStyle(fontSize, marginSize) {
  return {
    fontSize,
    marginTop: marginSize,
    marginBottom: marginSize,
    ...boldStyle
  };
}

const getReactNativePropsForHeading = ({
  domNode
}) => {
  const textLabel = (0, _domutils.textContent)(domNode);
  return {
    native: {
      accessible: true,
      accessibilityLabel: textLabel,
      accessibilityRole: 'header'
    }
  };
};

const getReactNativePropsWithHref = function getReactNativePropsWithHref({
  attributes
}) {
  if (typeof attributes.href === 'string' && attributes.href.length > 0) {
    return {
      native: {
        accessible: true,
        accessibilityRole: 'link'
      }
    };
  }
};

const sectioningModelMap = {
  address: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'address',
    mixedUAStyles: italicStyle
  }),
  article: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'article'
  }),
  aside: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'aside'
  }),
  body: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'body'
  }),
  footer: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'footer'
  }),
  h1: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'h1',
    mixedUAStyles: headerStyle('2em', '.67em'),
    getReactNativeProps: getReactNativePropsForHeading
  }),
  h2: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'h2',
    mixedUAStyles: headerStyle('1.5em', '.83em'),
    getReactNativeProps: getReactNativePropsForHeading
  }),
  h3: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'h3',
    mixedUAStyles: headerStyle('1.17em', '1em'),
    getReactNativeProps: getReactNativePropsForHeading
  }),
  h4: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'h4',
    mixedUAStyles: headerStyle('1em', '1.33em'),
    getReactNativeProps: getReactNativePropsForHeading
  }),
  h5: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'h5',
    mixedUAStyles: headerStyle('.83em', '1.67em'),
    getReactNativeProps: getReactNativePropsForHeading
  }),
  h6: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'h6',
    mixedUAStyles: headerStyle('.67em', '2.33em'),
    getReactNativeProps: getReactNativePropsForHeading
  }),
  header: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'header'
  }),
  hgroup: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'hgroup'
  }),
  nav: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'nav'
  }),
  section: _HTMLElementModel.default.fromNativeModel({
    category: 'sectioning',
    tagName: 'section'
  })
};
const unsupportedModelMap = {
  area: _HTMLElementModel.default.fromNativeModel({
    tagName: 'area',
    category: 'untranslatable',
    isVoid: true,
    getReactNativeProps: getReactNativePropsWithHref
  }),
  map: _HTMLElementModel.default.fromNativeModel({
    tagName: 'map',
    category: 'untranslatable'
  })
};
const attribsModelMap = {
  accesskey: _HTMLElementModel.default.fromNativeModel({
    tagName: 'accesskey',
    category: 'untranslatable'
  }),
  caption: _HTMLElementModel.default.fromNativeModel({
    tagName: 'caption',
    category: 'untranslatable'
  }),
  col: _HTMLElementModel.default.fromNativeModel({
    tagName: 'col',
    category: 'untranslatable',
    isVoid: true
  }),
  colgroup: _HTMLElementModel.default.fromNativeModel({
    tagName: 'colgroup',
    category: 'untranslatable'
  }),
  datalist: _HTMLElementModel.default.fromNativeModel({
    tagName: 'datalist',
    category: 'untranslatable'
  }),
  source: _HTMLElementModel.default.fromNativeModel({
    tagName: 'source',
    category: 'untranslatable',
    isVoid: true
  }),
  track: _HTMLElementModel.default.fromNativeModel({
    tagName: 'track',
    category: 'untranslatable',
    isVoid: true
  }),
  optgroup: _HTMLElementModel.default.fromNativeModel({
    tagName: 'optgroup',
    category: 'untranslatable'
  }),
  option: _HTMLElementModel.default.fromNativeModel({
    tagName: 'option',
    category: 'untranslatable'
  }),
  param: _HTMLElementModel.default.fromNativeModel({
    tagName: 'param',
    category: 'untranslatable',
    isVoid: true
  })
};
const interactiveModelMap = {
  button: _HTMLElementModel.default.fromNativeModel({
    tagName: 'button',
    category: 'interactive',
    reactNativeProps: {
      native: {
        accessibilityRole: 'button'
      }
    }
  }),
  fieldset: _HTMLElementModel.default.fromNativeModel({
    tagName: 'fieldset',
    category: 'interactive'
  }),
  form: _HTMLElementModel.default.fromNativeModel({
    tagName: 'form',
    category: 'interactive'
  }),
  input: _HTMLElementModel.default.fromNativeModel({
    tagName: 'input',
    category: 'interactive',
    isVoid: true
  }),
  label: _HTMLElementModel.default.fromNativeModel({
    tagName: 'label',
    category: 'interactive'
  }),
  legend: _HTMLElementModel.default.fromNativeModel({
    tagName: 'legend',
    category: 'interactive'
  }),
  meter: _HTMLElementModel.default.fromNativeModel({
    tagName: 'meter',
    category: 'interactive'
  }),
  progress: _HTMLElementModel.default.fromNativeModel({
    tagName: 'progress',
    category: 'interactive'
  }),
  select: _HTMLElementModel.default.fromNativeModel({
    tagName: 'select',
    category: 'interactive',
    reactNativeProps: {
      native: {
        accessible: true,
        accessibilityRole: 'combobox'
      }
    }
  }),
  details: _HTMLElementModel.default.fromNativeModel({
    tagName: 'details',
    category: 'interactive'
  }),
  dialog: _HTMLElementModel.default.fromNativeModel({
    tagName: 'dialog',
    category: 'interactive'
  }),
  output: _HTMLElementModel.default.fromNativeModel({
    tagName: 'output',
    category: 'interactive'
  }),
  summary: _HTMLElementModel.default.fromNativeModel({
    tagName: 'summary',
    category: 'interactive'
  }),
  textarea: _HTMLElementModel.default.fromNativeModel({
    tagName: 'textarea',
    category: 'interactive'
  })
};
const metadataModelMap = {
  base: _HTMLElementModel.default.fromNativeModel({
    tagName: 'base',
    category: 'untranslatable',
    isVoid: true
  }),
  head: _HTMLElementModel.default.fromNativeModel({
    tagName: 'head',
    category: 'untranslatable',
    isOpaque: true
  }),
  link: _HTMLElementModel.default.fromNativeModel({
    tagName: 'link',
    category: 'untranslatable',
    isVoid: true
  }),
  meta: _HTMLElementModel.default.fromNativeModel({
    tagName: 'meta',
    category: 'untranslatable',
    isVoid: true
  }),
  title: _HTMLElementModel.default.fromNativeModel({
    tagName: 'title',
    category: 'untranslatable'
  })
};
const untranslatableModelMap = { ...attribsModelMap,
  ...interactiveModelMap,
  ...unsupportedModelMap,
  ...metadataModelMap
};
const groupingModelMap = {
  blockquote: _HTMLElementModel.default.fromNativeModel({
    tagName: 'blockquote',
    category: 'grouping',
    getMixedUAStyles: ({
      attributes
    }) => {
      if (attributes.type === 'cite') {
        return leftBorderQuoteStyle;
      }
    },
    mixedUAStyles: spacedBlockStyle
  }),
  dd: _HTMLElementModel.default.fromNativeModel({
    tagName: 'dd',
    category: 'grouping',
    mixedUAStyles: {
      marginLeft: UA_MARGIN_HZ
    }
  }),
  div: _HTMLElementModel.default.fromNativeModel({
    tagName: 'div',
    category: 'grouping'
  }),
  dl: _HTMLElementModel.default.fromNativeModel({
    tagName: 'dl',
    category: 'grouping',
    mixedUAStyles: bigMarginTopBottomStyle
  }),
  dt: _HTMLElementModel.default.fromNativeModel({
    tagName: 'dt',
    category: 'grouping',
    mixedUAStyles: boldStyle
  }),
  figcaption: _HTMLElementModel.default.fromNativeModel({
    tagName: 'figcaption',
    category: 'grouping',
    mixedUAStyles: { ...italicStyle,
      textAlign: 'center'
    }
  }),
  figure: _HTMLElementModel.default.fromNativeModel({
    tagName: 'figure',
    category: 'grouping',
    mixedUAStyles: spacedBlockStyle
  }),
  hr: _HTMLElementModel.default.fromNativeModel({
    tagName: 'hr',
    category: 'grouping',
    mixedUAStyles: {
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 1,
      width: '100%',
      backgroundColor: UA_GRAY,
      ...shortMarginTopBottomStyle
    }
  }),
  li: _HTMLElementModel.default.fromNativeModel({
    tagName: 'li',
    category: 'grouping'
  }),
  main: _HTMLElementModel.default.fromNativeModel({
    tagName: 'main',
    category: 'grouping'
  }),
  menu: _HTMLElementModel.default.fromNativeModel({
    tagName: 'menu',
    category: 'grouping'
  }),
  ol: _HTMLElementModel.default.fromNativeModel({
    tagName: 'ol',
    category: 'grouping',
    mixedUAStyles: listStyles,

    setMarkersForTNode(targetMarkers, parentMarkers) {
      targetMarkers.olNestLevel = parentMarkers.olNestLevel + 1;
    }

  }),
  p: _HTMLElementModel.default.fromNativeModel({
    tagName: 'p',
    category: 'grouping',
    mixedUAStyles: bigMarginTopBottomStyle
  }),
  pre: _HTMLElementModel.default.fromNativeModel({
    tagName: 'pre',
    category: 'grouping',
    mixedUAStyles: preStyles
  }),
  xmp: _HTMLElementModel.default.fromNativeModel({
    tagName: 'xmp',
    category: 'grouping',
    mixedUAStyles: preStyles
  }),
  listing: _HTMLElementModel.default.fromNativeModel({
    tagName: 'listing',
    category: 'grouping',
    mixedUAStyles: preStyles
  }),
  plaintext: _HTMLElementModel.default.fromNativeModel({
    tagName: 'plaintext',
    category: 'grouping',
    mixedUAStyles: preStyles
  }),
  ul: _HTMLElementModel.default.fromNativeModel({
    tagName: 'ul',
    category: 'grouping',
    mixedUAStyles: listStyles,

    setMarkersForTNode(targetMarkers, parentMarkers) {
      targetMarkers.ulNestLevel = parentMarkers.ulNestLevel + 1;
    }

  }),
  dir: _HTMLElementModel.default.fromNativeModel({
    tagName: 'dir',
    category: 'grouping',
    mixedUAStyles: listStyles
  })
};
const tabularModelMap = {
  table: _HTMLElementModel.default.fromNativeModel({
    tagName: 'table',
    category: 'tabular'
  }),
  tbody: _HTMLElementModel.default.fromNativeModel({
    tagName: 'tbody',
    category: 'tabular'
  }),
  td: _HTMLElementModel.default.fromNativeModel({
    tagName: 'td',
    category: 'tabular',
    mixedUAStyles: {
      padding: 2,
      flex: 1
    }
  }),
  tfoot: _HTMLElementModel.default.fromNativeModel({
    tagName: 'tfoot',
    category: 'tabular'
  }),
  th: _HTMLElementModel.default.fromNativeModel({
    tagName: 'th',
    category: 'tabular',
    mixedUAStyles: {
      padding: 2,
      flex: 1,
      fontWeight: 'bold'
    }
  }),
  thead: _HTMLElementModel.default.fromNativeModel({
    tagName: 'thead',
    category: 'tabular'
  }),
  tr: _HTMLElementModel.default.fromNativeModel({
    tagName: 'tr',
    category: 'tabular',
    mixedUAStyles: {
      flexDirection: 'row',
      flexWrap: 'nowrap'
    }
  })
}; // These emnbedded should be rendered by default.

const renderedEmbeddedModelMap = {
  img: _HTMLElementModel.default.fromNativeModel({
    tagName: 'img',
    category: 'embedded',
    isVoid: true,

    getReactNativeProps({
      attributes
    }, props) {
      // see https://w3c.github.io/html-aria/#el-img
      const label = attributes['aria-label'] || attributes.alt;

      if (label && (!(props !== null && props !== void 0 && props.view) || props.view.accessibilityRole !== 'none')) {
        return {
          native: {
            accessibilityLabel: label,
            accessibilityRole: 'image'
          }
        };
      }

      return {
        native: {
          accessibilityRole: 'none'
        }
      };
    }

  }).extend({
    contentModel: _HTMLContentModel.default.block
  }),
  picture: _HTMLElementModel.default.fromNativeModel({
    tagName: 'picture',
    category: 'embedded',
    isOpaque: false,
    isVoid: false // allows source and img

  }).extend({
    contentModel: _HTMLContentModel.default.block
  })
}; // Embedded elements content model is "none" by default.

const emptyEmbeddedModelMap = {
  audio: _HTMLElementModel.default.fromNativeModel({
    tagName: 'audio',
    category: 'embedded',
    isVoid: false // allows tracks

  }),
  canvas: _HTMLElementModel.default.fromNativeModel({
    tagName: 'canvas',
    category: 'embedded',
    isVoid: false // allows specific content

  }),
  embed: _HTMLElementModel.default.fromNativeModel({
    tagName: 'embed',
    category: 'embedded',
    isVoid: true
  }),
  iframe: _HTMLElementModel.default.fromNativeModel({
    tagName: 'iframe',
    category: 'embedded',
    isVoid: true
  }),
  math: _HTMLElementModel.default.fromNativeModel({
    tagName: 'math',
    category: 'embedded',
    isVoid: false,
    // allows mathml elems
    isOpaque: true
  }),
  object: _HTMLElementModel.default.fromNativeModel({
    tagName: 'object',
    category: 'embedded',
    isVoid: false // allows params

  }),
  svg: _HTMLElementModel.default.fromNativeModel({
    tagName: 'svg',
    category: 'embedded',
    isVoid: false,
    // allows svg elems
    isOpaque: true,

    getReactNativeProps({
      attributes
    }) {
      if (attributes['aria-label']) {
        return {
          native: {
            accessibilityLabel: attributes['aria-label'],
            accessibilityRole: 'image'
          }
        };
      }

      return {
        native: {
          accessibilityRole: 'none'
        }
      };
    }

  }),
  video: _HTMLElementModel.default.fromNativeModel({
    tagName: 'video',
    category: 'embedded',
    isVoid: false // allows source, tracks + transparent

  })
};
const editsModelMap = {
  ins: _HTMLElementModel.default.fromNativeModel({
    tagName: 'ins',
    category: 'edits',
    mixedUAStyles: solidUnderlineStyle,

    setMarkersForTNode(targetMarkers) {
      targetMarkers.edits = 'ins';
    }

  }),
  del: _HTMLElementModel.default.fromNativeModel({
    tagName: 'del',
    category: 'edits',
    mixedUAStyles: lineThroughStyle,

    setMarkersForTNode(targetMarkers) {
      targetMarkers.edits = 'del';
    }

  })
};
const textLevelModelMap = {
  em: _HTMLElementModel.default.fromNativeModel({
    tagName: 'em',
    category: 'textual',
    mixedUAStyles: italicStyle
  }),
  strong: _HTMLElementModel.default.fromNativeModel({
    tagName: 'strong',
    category: 'textual',
    mixedUAStyles: boldStyle
  }),
  small: _HTMLElementModel.default.fromNativeModel({
    tagName: 'small',
    category: 'textual',
    mixedUAStyles: {
      fontSize: 'smaller'
    }
  }),
  big: _HTMLElementModel.default.fromNativeModel({
    tagName: 'big',
    category: 'textual',
    mixedUAStyles: {
      fontSize: 'larger'
    }
  }),
  s: _HTMLElementModel.default.fromNativeModel({
    tagName: 's',
    category: 'textual',
    mixedUAStyles: lineThroughStyle
  }),
  strike: _HTMLElementModel.default.fromNativeModel({
    tagName: 'strike',
    category: 'textual',
    mixedUAStyles: lineThroughStyle
  }),
  cite: _HTMLElementModel.default.fromNativeModel({
    tagName: 'cite',
    category: 'textual',
    mixedUAStyles: italicStyle
  }),
  q: _HTMLElementModel.default.fromNativeModel({
    tagName: 'q',
    category: 'textual' // default style, content: "open,close-quote"

  }),
  dfn: _HTMLElementModel.default.fromNativeModel({
    tagName: 'dfn',
    category: 'textual',
    mixedUAStyles: italicStyle
  }),
  abbr: _HTMLElementModel.default.fromNativeModel({
    tagName: 'abbr',
    category: 'textual',
    mixedUAStyles: dottedUnderlineStyle
  }),
  acronym: _HTMLElementModel.default.fromNativeModel({
    tagName: 'acronym',
    category: 'textual',
    mixedUAStyles: dottedUnderlineStyle
  }),
  ruby: _HTMLElementModel.default.fromNativeModel({
    tagName: 'ruby',
    category: 'textual'
  }),
  rt: _HTMLElementModel.default.fromNativeModel({
    tagName: 'rt',
    category: 'textual'
  }),
  rp: _HTMLElementModel.default.fromNativeModel({
    tagName: 'rp',
    category: 'textual'
  }),
  data: _HTMLElementModel.default.fromNativeModel({
    tagName: 'data',
    category: 'textual'
  }),
  time: _HTMLElementModel.default.fromNativeModel({
    tagName: 'time',
    category: 'textual'
  }),
  code: _HTMLElementModel.default.fromNativeModel({
    tagName: 'code',
    category: 'textual',
    mixedUAStyles: monoStyle
  }),
  tt: _HTMLElementModel.default.fromNativeModel({
    tagName: 'tt',
    category: 'textual',
    mixedUAStyles: monoStyle
  }),
  var: _HTMLElementModel.default.fromNativeModel({
    tagName: 'var',
    category: 'textual',
    mixedUAStyles: italicStyle
  }),
  samp: _HTMLElementModel.default.fromNativeModel({
    tagName: 'samp',
    category: 'textual',
    mixedUAStyles: monoStyle
  }),
  kbd: _HTMLElementModel.default.fromNativeModel({
    tagName: 'kbd',
    category: 'textual',
    mixedUAStyles: monoStyle
  }),
  sub: _HTMLElementModel.default.fromNativeModel({
    tagName: 'sub',
    category: 'textual',
    mixedUAStyles: {
      textAlignVertical: 'bottom',
      fontSize: 'smaller'
    }
  }),
  sup: _HTMLElementModel.default.fromNativeModel({
    tagName: 'sup',
    category: 'textual',
    mixedUAStyles: {
      textAlignVertical: 'top',
      fontSize: 'smaller'
    }
  }),
  i: _HTMLElementModel.default.fromNativeModel({
    tagName: 'i',
    category: 'textual',
    mixedUAStyles: italicStyle
  }),
  b: _HTMLElementModel.default.fromNativeModel({
    tagName: 'b',
    category: 'textual',
    mixedUAStyles: boldStyle
  }),
  u: _HTMLElementModel.default.fromNativeModel({
    tagName: 'u',
    category: 'textual',
    mixedUAStyles: solidUnderlineStyle
  }),
  mark: _HTMLElementModel.default.fromNativeModel({
    tagName: 'mark',
    category: 'textual',
    mixedUAStyles: {
      backgroundColor: 'yellow',
      color: 'black'
    }
  }),
  bdi: _HTMLElementModel.default.fromNativeModel({
    tagName: 'bdi',
    category: 'textual' // unicode-bidi: isolate;

  }),
  bdo: _HTMLElementModel.default.fromNativeModel({
    tagName: 'bdo',
    category: 'textual' //  unicode-bidi: isolate-override;

  }),
  span: _HTMLElementModel.default.fromNativeModel({
    tagName: 'span',
    category: 'textual'
  }),
  br: _HTMLElementModel.default.fromNativeModel({
    tagName: 'br',
    category: 'textual',
    isVoid: true
  }),
  wbr: _HTMLElementModel.default.fromNativeModel({
    tagName: 'wbr',
    category: 'textual',
    isVoid: true
  })
};
const defaultHTMLElementModels = {
  a: _HTMLElementModel.default.fromNativeModel({
    tagName: 'a',
    category: 'anchor',
    getMixedUAStyles: ({
      attributes
    }) => {
      if (typeof attributes.href === 'string') {
        return anchorStyle;
      }
    },
    getReactNativeProps: getReactNativePropsWithHref,

    setMarkersForTNode(targetMarkers) {
      targetMarkers.anchor = true;
    }

  }),
  ...textLevelModelMap,
  ...editsModelMap,
  ...renderedEmbeddedModelMap,
  ...emptyEmbeddedModelMap,
  ...tabularModelMap,
  ...groupingModelMap,
  ...sectioningModelMap,
  ...interactiveModelMap,
  ...untranslatableModelMap
};
var _default = defaultHTMLElementModels;
exports.default = _default;
//# sourceMappingURL=defaultHTMLElementModels.js.map