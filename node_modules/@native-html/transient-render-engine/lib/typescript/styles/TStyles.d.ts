import { CSSProcessedProps } from '@native-html/css-processor';
/**
 * A record of styles organized in logical chunks:
 *
 * - wether they are supported in React Native (native) and others (web).
 * - wether they target native Views (block) or Text (text).
 * - wether they are inherited by this node's children (flow) or not (retain).
 *
 * @public
 */
export interface TStylesShape {
    readonly nativeTextFlow: CSSProcessedProps['native']['text']['flow'];
    readonly nativeBlockFlow: CSSProcessedProps['native']['block']['flow'];
    readonly nativeTextRet: CSSProcessedProps['native']['text']['retain'];
    readonly nativeBlockRet: CSSProcessedProps['native']['block']['retain'];
    readonly webTextFlow: CSSProcessedProps['web']['text']['flow'];
    readonly webBlockRet: CSSProcessedProps['web']['block']['retain'];
}
export declare class TStyles implements TStylesShape {
    readonly nativeTextFlow: CSSProcessedProps['native']['text']['flow'];
    readonly nativeBlockFlow: CSSProcessedProps['native']['block']['flow'];
    readonly nativeTextRet: CSSProcessedProps['native']['text']['retain'];
    readonly nativeBlockRet: CSSProcessedProps['native']['block']['retain'];
    readonly webTextFlow: CSSProcessedProps['web']['text']['flow'];
    readonly webBlockRet: CSSProcessedProps['web']['block']['retain'];
    constructor(ownProcessedProps: CSSProcessedProps, parentStyles?: TStyles | null);
    static empty(): TStyles;
}
