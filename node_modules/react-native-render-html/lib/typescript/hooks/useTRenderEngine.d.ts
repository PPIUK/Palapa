import { TRenderEngineConfig } from '../shared-types';
/**
 * @internal
 */
export default function useTRenderEngine({ allowedStyles, baseStyle, classesStyles, customHTMLElementModels, dangerouslyDisableHoisting, dangerouslyDisableWhitespaceCollapsing, domVisitors, emSize, enableCSSInlineProcessing, enableUserAgentStyles, fallbackFonts, htmlParserOptions, idsStyles, ignoreDomNode, ignoredDomTags, ignoredStyles, selectDomRoot, setMarkersForTNode, systemFonts, tagsStyles }: TRenderEngineConfig): import("@native-html/transient-render-engine").TRenderEngine;
