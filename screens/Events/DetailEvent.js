import React, { useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image} from 'react-native';
import { Transition, Transitioning} from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';
import {CustomHeader} from '../../components/CustomHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import events from '../../db/data/events/';

import { Feather, AntDesign } from '@expo/vector-icons';


const ppi = 
  events.map((item, index) => (
    {label: item.title, value: index}
));

export default function Restoran({ navigation, route }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState(ppi);

  const {ppiIndex, restoIndex} = route.params;
  const detail = events[ppiIndex]["events"][restoIndex];

  const ref = React.useRef();
    return (
      <View style={styles.container}>

        <CustomHeader isHome={false} navigation={navigation}/>
        <ScrollView>

        <Image style={styles.banner} source={require('../../assets/events.jpg')} />

          <Text style={styles.title}>
            {detail.nama}
          </Text>

        <View style={styles.cardContainer}>
          <View style={styles.desc}>
          <Feather name="calendar" size={24} color="#004380" />
              <Text style={{marginHorizontal : 10}}>{detail.datetime}</Text>
          </View>
          <View style={styles.desc}>
              <Feather name="map-pin" size={24} color='#004380' />
              <Text style={{marginHorizontal : 10}}>{detail.alamat}</Text>
          </View>
          <View style={styles.desc}>
            <Feather name="tag" size={24} color='#004380' />
              <Text style={{marginHorizontal : 10}}>{detail.price}</Text>
          </View>
          <View style={styles.desc}>
          <Feather name="bookmark" size={24} color="#004380" />
              <Text style={{marginHorizontal : 10}}>{detail.rsvp}</Text>
          </View>

        </View>
      <Text style={{margin:20, fontSize:22,}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies orci id mattis faucibus. Donec aliquet porta sodales. Praesent a dictum risus, rutrum lobortis lacus. Donec tempor nulla ligula, vitae blandit mauris efficitur sed. Ut sodales leo quis ipsum facilisis eleifend. Nullam quis sapien et ex fermentum pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ac magna at magna venenatis congue vulputate a lectus. Curabitur quis massa sit amet augue scelerisque scelerisque. Fusce aliquam,
      </Text>
      <Text style={{margin:20}}>
        RSVP : {detail.rsvp}
      </Text>

      
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
  });