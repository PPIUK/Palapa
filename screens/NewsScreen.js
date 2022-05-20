import * as React from 'react';
import { View, Text } from "react-native";
import {CustomHeader} from '../components/CustomHeader';
import Web from './Web';

export default function NewsScreen({navigation}) {
   return (
      
      <View style={{flex:1, alignItems: 'center'}}>
         <CustomHeader isHome={false} navigation={navigation}/>
         <Web />
      </View>
   );
 }