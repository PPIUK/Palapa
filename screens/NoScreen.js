import * as React from 'react';
import { View, Text } from "react-native";

export default function NoScreen() {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text style={{fontSize:16,fontWeight:'700'}}>Whoops! This page has not been developed yet.</Text>
      </View>
   );
 }