import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image, Linking} from 'react-native';
import {CustomHeader} from '../../components/CustomHeader';

import { Feather, AntDesign } from '@expo/vector-icons';


export default function DetailEvents({ navigation, route }) {

  //get data from parent
  const {event} = route.params;

    return (
      <View style={styles.container}>

        <CustomHeader isHome={false} navigation={navigation}/>
         <ScrollView>

        <Image style={styles.banner} source={require('../../assets/events.jpg')} />

          <Text style={styles.title}>
            {event.name}
          </Text>
          <Text style={styles.subtitle}>
            by {event.penyelenggara}
          </Text>

        <View style={styles.cardContainer}>
          <View style={styles.desc}>
          <Feather name="calendar" size={24} color="#004380" />
              <Text style={{marginHorizontal : 10}}>{event.date.slice(0,10)} {event.date.slice(30,)}</Text>
          </View>
          <View style={styles.desc}>
          <Feather name="clock" size={24} color="#004380" />
              <Text style={{marginHorizontal : 10}}>{event.date.slice(11,29)}</Text>
          </View>
          <View style={styles.desc}>
              <Feather name="map-pin" size={24} color='#004380' />
              <Text style={{marginHorizontal : 10}}>{event.city}</Text>
          </View>
          <View style={styles.desc}>
            <Feather name="tag" size={24} color='#004380' />
              <Text style={{marginHorizontal : 10}}>GBP {event.price}</Text>
          </View>
          <View style={styles.desc}>
          <Feather name="bookmark" size={24} color="#004380" />
              <Text style={{marginHorizontal : 10}} onPress={() => Linking.openURL(event.link)}>{event.link}</Text>
          </View>

        </View>
      <Text style={{margin:20, fontSize:22,}}>
      {event.desc}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(event.link)}>
        <Text style={{color:'white', fontWeight:'bold'}}>
        Click here for RSVP
      </Text>
      </TouchableOpacity>

      
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
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      color: 'black',
      marginHorizontal: 15,
    },
    banner:{
      width: Dimensions.get('window').width - 50,
      height: 150,
      borderRadius: 15,
      marginVertical:10,
      alignSelf: 'center',
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
    button: {
      backgroundColor:'#004380',
      color: 'white',
      alignSelf: 'center',
      padding: 15,
      borderRadius:15,
      fontWeight: 'bold',
      margin:15,
    }
  });