import { DefaultHTMLElementModelsStatic } from './defaultHTMLElementModels';
import HTMLElementModel from './HTMLElementModel';
import { HTMLModelRecord, TagName } from './model-types';
export default class HTMLModelRegistry<E extends string> {
    readonly modelRecords: HTMLModelRecord<E | TagName>;
    constructor(customize?: (defaultHTMLElementModels: DefaultHTMLElementModelsStatic) => HTMLModelRecord<E | TagName>);
    getElementModelFromTagName(tagName: E | TagName): HTMLElementModel<string, any> | null;
}
