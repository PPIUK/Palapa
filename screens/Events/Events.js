import React, { useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import { Transition, Transitioning} from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';
import {CustomHeader} from '../../components/CustomHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import events from '../data/events/';


const ppi = 
  events.map((item, index) => (
    {label: item.title, value: index}
));

export default function Restoran({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState(ppi);


  const ref = React.useRef();
    return (
      <View style={styles.container}>

        <CustomHeader isHome={true} navigation={navigation}/>

        <View style={{...(Platform.OS !== 'android' && {zIndex: 10}), width:'90%'}}>
          <Text style={styles.title}>
            Events
          </Text>

          <Text style={{alignSelf:'center', padding:30,paddingHorizontal:120, borderWidth:1, borderColor:'#004380', borderRadius:15, marginVertical: 10}}>
            banner, illustrasi
          </Text> 

          <Text style={styles.subtitle}>
            Find Events in:
          </Text>

          <View style={{}}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                containerStyle={{width: 200}}
              />
          </View>
        </View>

        <ScrollView>
          {events[value]["events"].map(({nama, datetime},index)=>{
            return(
              <TouchableOpacity 
                key={index} 
                onPress={() =>{
                  navigation.navigate('DetailEvent', {ppiIndex: value, restoIndex: index})
                }} 
                style={styles.cardContainer}
              >
                  
                <View style={{flexDirection: 'row'}}>
                  <View style={{padding:25,margin : 5,borderWidth:1, borderColor:'#004380', borderRadius:7,}}/>
                    <View>
                      <Text style={styles.h1}>{nama}</Text>
                      <Text style={styles.h2}>by PPI {events[value].title}</Text>
                    </View>
                </View>
              </TouchableOpacity>
            )
          })}
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
      color: 'red',
    
    },
    subtitle: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginVertical: 10,
      },
    
    searchBox:{
        flexDirection: 'row',  
        borderWidth:1,
        borderColor: '#004380', 
        borderRadius: 15, 
        marginVertical: 10,
        alignSelf:'center'
    },
    tab: {
        flexDirection:'row',
        backgroundColor: '#004380',
        padding:15,
        margin:10,
        width:'110%',
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
    h1: {
      flex :1,
      padding : 5,
      fontSize : 17,
      fontWeight : 'bold',
    },
    h2: {
      flex :1,
      padding : 5,
      fontSize : 15,
      fontWeight : '500',
    },

  });