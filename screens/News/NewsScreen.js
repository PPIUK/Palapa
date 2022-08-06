/* 
Screen for news, works similar way to kontak screen
Screen to return in-app-browser inside view
Route is provided in HomeScreen.js when called
*/

import * as React from 'react';
import { View, Text } from "react-native";
import {CustomHeader} from '../../components/CustomHeader';
import Web from './Web';

const NewsScreen = ({route, navigation}) => {
   return (
      <View style={{flex:1, alignItems: 'center'}}>
         <CustomHeader isHome={false} navigation={navigation}/>
         <Web route={route}/>
      </View>
   );
 }

export default NewsScreen;