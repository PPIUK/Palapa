/* 
Screen for kontak, works similar way to news screen
Screen to return in-app-browser inside view
No route needed
*/

import * as React from 'react';
import { View, Text } from "react-native";
import {CustomHeader} from '../../components/CustomHeader';
import KontakWeb from './KontakWeb';

export default function KontakScreen({navigation}) {
   return (
      
      <View style={{flex:1, alignItems: 'center'}}>
         <CustomHeader isHome={false} navigation={navigation}/>
         <KontakWeb />
      </View>
   );
 }