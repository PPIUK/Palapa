/*
EventLink function
return the webview of passed link from parent
*/

import * as React from 'react';
import { View, Dimensions } from "react-native";
import {CustomHeader} from '../../components/CustomHeader';
import { WebView } from "react-native-webview";


const windowSize = Dimensions.get('window');


export default function EventLink({route, navigation}) {
   const {link} = route.params;
   try {
    link = route.params.uri;
    
    } catch (e) {;}
    
   return (
      <View style={{flex:1, alignItems: 'center'}}>
         <CustomHeader isHome={false} navigation={navigation}/>
         <View style={{width: windowSize.width, height: windowSize.height-135}}>
          <WebView source={{ uri: link }} />
        </View>
      </View>
   );
 }