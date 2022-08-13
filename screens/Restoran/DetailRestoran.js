//DetailRostoran Screen, child screen from RestoranMain showing the detail of the restaurant clicked

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image} from 'react-native';
import {CustomHeader} from '../../components/CustomHeader';


import { Feather, AntDesign } from '@expo/vector-icons';


export default function DetailRestoran({ navigation, route }) {

  //get data from parent
  const {resto} = route.params;
  const banner = resto.gambar_resto.replace('open', 'uc');
    return (
      <View style={styles.container}>
        
        <CustomHeader isHome={false} navigation={navigation}/>
        <ScrollView>     
        <Image style={styles.banner} source={{
          uri: banner,
        }} />

          <Text style={styles.title}>
            {resto.name}
          </Text>
        
        <View style={styles.cardContainer}>
          <View style={styles.desc}>
              <Feather name="map-pin" size={24} color='#004380' />
              <Text style={{marginHorizontal : 10}}>{resto.city}</Text>
          </View>
          <View style={styles.desc}>
            <Feather name="dollar-sign" size={24} color='#004380' />
              <Text style={{marginHorizontal : 10}}>$-$$$</Text>
          </View>
          <View style={styles.desc}>
            <Feather name="tag" size={24} color='#004380' />
              <Text style={{marginHorizontal : 10}}>{}</Text>
          </View>
          <View style={styles.desc}>
            <AntDesign name="phone" size={24} color='#004380' />
              <Text style={{marginHorizontal : 10}}>{resto.telp}</Text>
          </View>
          <View style={styles.desc}>
            <AntDesign name="clockcircleo" size={24} color='#004380' />
              <Text style={{marginHorizontal : 10}}>{resto.opening_time}</Text>
          </View>
        </View>

        <View style={{margin : 10}}>
            <Text style={styles.subtitle}>
                Menu
            </Text>
            <ScrollView horizontal={true}>
              {resto.gambar_menu.split(", ").map((link, index)=>{
                <Image style={styles.menu} source={{
                  uri: link.replace('open', 'uc'),
                }} />
            })}      
            </ScrollView>
        </View>

        </ScrollView>
      </View>
    ); 
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : 'white',
      alignItems : 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      color: 'black',
      margin: 15,
    
    },
    banner:{
      width: Dimensions.get('window').width - 50,
      height: 100,
      borderRadius: 15,
      alignSelf: 'center',
    },
    menu:{
      height:200,
      width: 200,
      borderRadius: 15,
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    subtitle: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginVertical: 10,
      },
    desc:{
        flexDirection: 'row',
        flex : 1,
        padding : 10,
        alignItems : 'center',
      },
    cardContainer: {
      margin : 5,
      borderWidth : 1,
      width: Dimensions.get('window').width - 50,
      alignSelf:'center', 
      borderWidth:1, 
      borderColor:'#004380', 
      borderRadius:7, 
      marginVertical: 10,
    },
  });