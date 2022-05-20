import { CSSProcessedProps, CSSProcessorConfig, MixedStyleDeclaration } from '@native-html/css-processor';
import HTMLModelRegistry from '../model/HTMLModelRegistry';
import { TNodeDescriptor } from '../tree/tree-types';
import { TStyles } from './TStyles';
import { StylesConfig } from './types';
export declare const emptyProcessedPropsReg: CSSProcessedProps;
export declare class TStylesMerger {
    private processor;
    private tagsStyles;
    private classesStyles;
    private idsStyles;
    private enableCSSInlineProcessing;
    private enableUserAgentStyles;
    private modelRegistry;
    constructor(config: Required<StylesConfig>, modelRegistry: HTMLModelRegistry<string>, cssProcessorConfig?: CSSProcessorConfig);
    compileInlineCSS(inlineCSS: string): CSSProcessedProps;
    compileStyleDeclaration(styleDeclaration: MixedStyleDeclaration): CSSProcessedProps;
    buildStyles(inlineStyle: string, parentStyles: TStyles | null, descriptor: TNodeDescriptor): TStyles;
}
