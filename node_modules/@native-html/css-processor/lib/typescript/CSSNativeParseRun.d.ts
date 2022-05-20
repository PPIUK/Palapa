import { CSSParseRun } from './CSSParseRun';
import { MixedStyleDeclaration } from './CSSProcessor';
import { CSSPropertiesValidationRegistry } from './CSSPropertiesValidationRegistry';
export declare class CSSNativeParseRun extends CSSParseRun {
    private declaration;
    constructor(declaration: MixedStyleDeclaration, registry: CSSPropertiesValidationRegistry);
    private fillProp;
    protected fillProcessedProps(): void;
}
