import { Document } from 'domhandler';
import { ParserOptions } from 'htmlparser2';
import { DomHandlerOptions } from './DomHandler';
/**
 * Parses the data, returns the resulting document.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */
export default function parseDocument(data: string, options?: ParserOptions & DomHandlerOptions): Document;
