import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function CustomHeader({isHome, navigation}){
  return(
      <View style={{ flexDirection: 'row', height: 50, marginTop: 35, marginHorizontal:15}}>
           <View style={{flex: 1, justifyContent: 'center'}}>
             {
            isHome?
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={30} color="black"/>
              </TouchableOpacity>
              :
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color="black"/>
            </TouchableOpacity>
            }
          </View>
  
          <View style={{flex: 1.5, justifyContent:'center'}}>
            <Text style={{textAlign: 'center', color:'blue', fontWeight:'bold', fontSize:25}}> PPI UK </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems:'flex-end'}}>
            <TouchableOpacity onPress={() => navigation.navigate('PPIUK')}>
              <Entypo name="home" size={30} color="black"/>
            </TouchableOpacity>
          </View>
      </View>
    )
}