import * as React from 'react';
import { View, Text } from "react-native";
import {CustomHeader} from '../components/CustomHeader';
import Web from './News/Web';

const NewsScreen = ({route, navigation}) => {
   return (
      <View style={{flex:1, alignItems: 'center'}}>
         <CustomHeader isHome={false} navigation={navigation}/>
         <Web route={route}/>
      </View>
   );
 }

export default NewsScreen;