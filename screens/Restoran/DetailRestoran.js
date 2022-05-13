import React, { useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import { Transition, Transitioning} from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';
import {CustomHeader} from '../../components/CustomHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import restoran from '../data/restoran/';

import { Feather, AntDesign } from '@expo/vector-icons';


const ppi = 
  restoran.map((item, index) => (
    {label: item.title, value: index}
));

export default function Restoran({ navigation, route }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState(ppi);

  const {ppiIndex, restoIndex} = route.params;
  const detail = restoran[ppiIndex]["restoran"][restoIndex];

  const ref = React.useRef();
    return (
      <View style={styles.container}>

        <CustomHeader isHome={false} navigation={navigation}/>
        <ScrollView>
        <View style={{...(Platform.OS !== 'android' && {zIndex: 10}), width:'90%'}}>
          
          <Text style={{alignSelf:'center', padding:50,paddingHorizontal:130, borderWidth:1, borderColor:'#004380', borderRadius:15, marginVertical: 10}}>
            foto resto
          </Text> 

          <Text style={styles.title}>
            {detail.nama}
          </Text>
        
          
        </View>

 
        
        <View style={styles.cardContainer}>
          <View style={styles.desc}>
              <Feather name="map-pin" size={24} color='#004380' />
              <Text style={{marginHorizontal : 10}}>{detail.alamat}</Text>
          </View>
          <View style={styles.desc}>
            <Feather name="dollar-sign" size={24} color='#004380' />
              <Text style={{marginHorizontal : 10}}>$-$$$</Text>
          </View>
          <View style={styles.desc}>
            <Feather name="tag" size={24} color='#004380' />
              <Text style={{marginHorizontal : 10}}>{detail.tags}</Text>
          </View>
          <View style={styles.desc}>
            <AntDesign name="phone" size={24} color='#004380' />
              <Text style={{marginHorizontal : 10}}>{detail.telp}</Text>
          </View>
          <View style={styles.desc}>
            <AntDesign name="clockcircleo" size={24} color='#004380' />
              <Text style={{marginHorizontal : 10}}>{detail.jam}</Text>
          </View>
        </View>

        <View style={{margin : 10}}>
            <Text style={styles.subtitle}>
                Menu
            </Text>
            <ScrollView horizontal={true}>
                <View style={{margin:10, padding:60, backgroundColor:'grey', borderRadius:10}}></View>
                <View style={{margin:10, padding:60, backgroundColor:'grey', borderRadius:10}}></View>
                <View style={{margin:10, padding:60, backgroundColor:'grey', borderRadius:10}}></View>
                <View style={{margin:10, padding:60, backgroundColor:'grey', borderRadius:10}}></View>
            </ScrollView>
        </View>

        <View style={{margin : 10}}>
            <Text style={styles.subtitle}>
                Penilaian
            </Text>
            <ScrollView horizontal={true}>
                <View style={{margin:10, padding:60, backgroundColor:'grey', borderRadius:10}}></View>
                <View style={{margin:10, padding:60, backgroundColor:'grey', borderRadius:10}}></View>
                <View style={{margin:10, padding:60, backgroundColor:'grey', borderRadius:10}}></View>
                <View style={{margin:10, padding:60, backgroundColor:'grey', borderRadius:10}}></View>
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