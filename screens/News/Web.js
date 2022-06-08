import * as React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { WebView } from "react-native-webview";

const windowSize = Dimensions.get('window');

const Web = ({route}) => {
  var last_uri = "/berita/";
  try {
    last_uri = route.params.uri;
    } catch (e) {;}

  return (
    <View style={{width: windowSize.width, height: windowSize.height-135}}>
      <WebView source={{ uri: 'https://ppiuk.id' + last_uri }} />
    </View>
  );
}

export default Web;