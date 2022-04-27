import * as React from 'react';
import { View, Dimensions } from 'react-native';
import { WebView } from "react-native-webview";
import { CustomHeader } from '../components/CustomHeader';

const windowSize = Dimensions.get('window');

const Web = (navigation) => {
    return (
        <View style={{width: windowSize.width, height: windowSize.height-135}}>
          <WebView source={{ uri: 'https://ppiuk.id/berita' }} />
        </View>
    );
}

export default Web;