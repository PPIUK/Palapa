/* 
Function using WebView library to return in-app-browser view of PPIUK contacts from wordpress
*/

import * as React from "react";
import { View, Dimensions } from "react-native";
import { WebView } from "react-native-webview";

const windowSize = Dimensions.get("window");

const KontakWeb = () => {
  return (
    <View style={{ width: windowSize.width, height: windowSize.height - 135 }}>
      <WebView source={{ uri: "https://ppiuk.id/ppi-cabang/" }} />
    </View>
  );
};

export default KontakWeb;
