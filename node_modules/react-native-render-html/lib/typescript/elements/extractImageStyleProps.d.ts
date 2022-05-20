import { WebBlockStyles } from '@native-html/transient-render-engine';
declare function extractImageStyleProps(style: any, objectFit?: WebBlockStyles['objectFit']): {
    resizeMode?: "contain" | "stretch" | "cover" | undefined;
};
export default extractImageStyleProps;
