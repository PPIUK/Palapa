import { CSSParseRun } from './CSSParseRun';
import { CSSPropertiesValidationRegistry } from './CSSPropertiesValidationRegistry';
import { ValidatorsType } from './makepropertiesValidators';
import { CSSProperties } from './processor-types';
declare type CSSRawPropertiesList = [string, any][];
export declare class CSSInlineParseRun extends CSSParseRun {
    private rules;
    constructor(inlineCSS: string, registry: CSSPropertiesValidationRegistry);
    private parseInlineCSS;
    normalizeProp(rule: CSSRawPropertiesList[number], strict?: boolean): null | [keyof ValidatorsType, any];
    reduceProps(reg: CSSProperties, rule: null | [keyof ValidatorsType, Exclude<any, null>]): CSSProperties;
    fillProcessedProps(): void;
}
export {};
