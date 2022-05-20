import React from 'react';
import { Text } from 'react-native';
import { TPhrasing, TText } from '@native-html/transient-render-engine';
import { TDefaultRendererProps } from './shared-types';
declare const renderTextualContent: (props: TDefaultRendererProps<TPhrasing | TText>) => React.CElement<import("react-native").TextProps, Text>;
export default renderTextualContent;
