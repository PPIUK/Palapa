import React from 'react';
import { ListElementProps } from './ListElement';
export declare type OLElementProps = Omit<ListElementProps<'ol'>, 'listType'>;
export default function OLElement(props: OLElementProps): React.FunctionComponentElement<ListElementProps<"ol" | "ul">>;
