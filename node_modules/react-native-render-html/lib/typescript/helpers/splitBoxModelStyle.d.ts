import { TNodeShape, TNodeType } from '@native-html/transient-render-engine';
/**
 * A utility to separate box model styles and other styles. Useful when one wants
 * to wrap a text element in a view to benefit from padding vertical,
 * borders... etc.
 *
 * @param styles - The native styles to split.
 */
export default function splitBoxModelStyle(style: ReturnType<TNodeShape<TNodeType>['getNativeStyles']>): {
    boxModelStyle: Pick<import("@native-html/transient-render-engine").NativeTextStyles | import("@native-html/transient-render-engine").NativeBlockStyles, "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomWidth" | "borderLeftColor" | "borderLeftWidth" | "borderRightColor" | "borderRightWidth" | "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopWidth" | "bottom" | "direction" | "display" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "opacity" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "right" | "top" | "transform" | "width" | "zIndex" | "borderStyle">;
    otherStyle: Omit<import("@native-html/transient-render-engine").NativeTextStyles | import("@native-html/transient-render-engine").NativeBlockStyles, string>;
};
