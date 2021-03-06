import React, { useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image} from 'react-native';
import {CustomHeader} from '../../components/CustomHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import dataAPI from '../../database/dataAPI';

// initialize ppi array with the first default value 'all ppi'
const ppi = 
  [{value:0, label: 'All PPI'}];

export default function EventsMain({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState(ppi);
  const [data, setData] = useState([]); // [] = init value

  useEffect( () => {getDataFromAPI()}, [] )

  function getDataFromAPI() {
    dataAPI.get('app/application-0-jjbbw/endpoint/HTTP/get_events')
    .then(function(response) {
      setData(response.data);
    }).catch(function(error) {
      console.log(error);
    })
  }

  if (!data) {
    return null
  }

  // filter data that flag 1.0
  var flagged = data.filter(x => x.flag == "1.0");

  // take all unique ppi that has event (the las event every ppi)
  const uniqueppi = [...new Map(flagged.map(item =>
    [item['city'], item])).values()];
    
  uniqueppi.map((item, index) => ( 
    ppi[index+1] = {value: index+1, label : item.city}
  ));

  // return all events with selected ppi
  function eventslist (selected){
    if(selected == '0'){
      return(flagged)
    }
    else{
      return(flagged.filter(x => x.city === ppi[selected].label))
    }
  }
  
    return (
      <View style={styles.container}>

        <CustomHeader isHome={true} navigation={navigation}/>

        <View style={{...(Platform.OS !== 'android' && {zIndex: 10}), width:'90%'}}>
          <Text style={styles.title}>
            Events
          </Text>

          <Image style={styles.banner} source={require('../../assets/events.jpg')} />

          <Text style={styles.subtitle}>
            Find Events in:
          </Text>

          <View>
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
       
        <ScrollView style={{marginVertical:15}}>
          {eventslist(value).map(({_id, name, penyelenggara, date},index)=>{
            return(
              <TouchableOpacity 
                key={index} 
                onPress={() =>{
                  navigation.navigate('DetailEvent', {event: eventslist(value)[index]})
                }} 
                style={styles.cardContainer}
              >
                
                <View style={{flexDirection: 'row',flex:1}}>

                    <Image style={{resizeMode:'contain',height:70, width:70,margin : 5}} source={require('../../assets/icon.png')} />
      
                    <View style={{}}>
                      <Text style={styles.h2}>{date.slice(0,10)} {date.slice(30,)}</Text>
                      <Text style={styles.h1}>{name}</Text>
                      <Text style={styles.h2}>by {penyelenggara}</Text>
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
      fontSize: 40,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      color: 'red',
    },
    banner:{
      width: Dimensions.get('window').width - 50,
      height: 150,
      borderRadius: 15,
      marginVertical:10,
    },
    subtitle: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginVertical: 10,
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
      padding : 3,
      fontSize : 17,
      fontWeight : 'bold',
    },
    h2: {
      flex :1,
      padding : 3,
      fontSize : 15,
      fontWeight : '500',
    },

  });