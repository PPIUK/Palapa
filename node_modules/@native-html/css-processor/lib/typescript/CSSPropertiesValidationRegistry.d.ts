import { CSSProcessorConfig } from './config';
import { ValidatorsType } from './makepropertiesValidators';
import { GenericCSSPropertyValidator } from './validators/GenericPropertyValidator';
export declare class CSSPropertiesValidationRegistry {
    readonly validators: Readonly<ValidatorsType>;
    readonly ignoredPropertiesRegistry: Partial<Record<string, true>>;
    readonly allowedPropertiesRegistry: Partial<Record<string, true>> | null;
    constructor(config: CSSProcessorConfig);
    private isInlinePropertyAllowed;
    shouldRegisterInlineProperty(name: string): name is keyof ValidatorsType;
    getValidatorForProperty<T extends string>(name: T): T extends keyof ValidatorsType ? GenericCSSPropertyValidator : null;
}
