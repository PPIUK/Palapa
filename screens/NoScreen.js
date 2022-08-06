/* 
Template for screens yet to be developed. 
Mainly used in Drawer.js
*/

import * as React from 'react';
import { View, Text } from "react-native";
import {CustomHeader} from '../components/CustomHeader';

export default function NoScreen({navigation}) {
   return (
      
      <View style={{flex:1, alignItems: 'center'}}>
         <CustomHeader isHome={true} navigation={navigation}/>
         <View style={{flex:1, flexDirection:'row'}}>
            <Text style={{fontSize:16, fontWeight:'700', alignSelf: 'center' }}>Whoops! This page has not been developed yet.</Text>
         </View>
      </View>
   );
 }