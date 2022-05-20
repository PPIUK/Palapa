import { CSSPropertiesValidationRegistry as CSSPropertiesValidationMap } from './CSSPropertiesValidationRegistry';
import { CSSProcessedProps } from './CSSProcessedProps';
export declare abstract class CSSParseRun {
    protected validationMap: CSSPropertiesValidationMap;
    protected processedProps: CSSProcessedProps;
    constructor(validationMap: CSSPropertiesValidationMap);
    protected abstract fillProcessedProps(): void;
    exec(): CSSProcessedProps;
}
