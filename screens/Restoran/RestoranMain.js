//Main Restoran Screen - Show all restaurant from database

import React, { useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image, Button, TextInput, Keyboard} from 'react-native';
import {CustomHeader} from '../../components/CustomHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import dataAPI from '../../database/dataAPI';

import SearchBar from "react-native-dynamic-search-bar";

// initialize ppi array with the first default value 'All PPI' for dropdown menu
const ppi = 
  [{value:0, label: 'All City'}];

export default function RestoranMain({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState(ppi);
  const [data, setData] = useState([]); // [] = init value
  const [filteredData, setfilteredData] = useState([]);
  
//Get data from database
  useEffect( () => {getDataFromAPI()}, [] )

  function getDataFromAPI() {
    dataAPI.get('app/application-0-jjbbw/endpoint/HTTP/get_restoran_katering')
    .then(function(response) {
      setData(response.data);
      setfilteredData(response.data);
    }).catch(function(error) {
      console.log(error);
    })
  }

  if (!data) {
    return null
  }

  // take all unique ppi that has event (the las event every ppi)
  const uniqueppi = [...new Map(data.map(item =>
    [item['city'], item])).values()];
    
   //Append data from database (flag 1) to ppi array
  uniqueppi.map((item, index) => ( 
    ppi[index+1] = {value: index+1, label : item.city}
  ));

  // return all events with selected ppi
  function restolist (selected){
    if(selected == '0'){
      return(filteredData)
    }
    else{
      return(filteredData.filter(x => x.city === ppi[selected].label))
    }
  }


  //filter function from search bar input
  function filterList(Text){
    if(Text !== ''){
      setfilteredData(data.filter(x => x.name.includes(Text)));
    } 
    else{
      setfilteredData(data)
    }
  }
    return (
      <View style={styles.container}>

        <CustomHeader isHome={true} navigation={navigation}/>

        <View style={{...(Platform.OS !== 'android' && {zIndex: 10}), width:'90%'}}>
          <Text style={styles.title}>
            Restoran & Katering 
          </Text>

          <Text style={styles.subtitle}>
            Discover Indonesian cuisine all over the UK 
          </Text>

        <SearchBar
          placeholder="Ketik nama restoran"
          onChangeText={(text) => filterList(text)}
          style={{borderWidth:2, borderColor:'#004380'}}
        />
        <Text></Text>
          <Image style={styles.banner} source={require('../../assets/restoran.jpg')} />

          <Text style={styles.subtitle}>
            Cari berdasarkan kota:
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

        {/*  Tab Navigation for future  development according to figma
        <View style={styles.tab}>
          <TouchableOpacity style={{flex:1, alignItems:'center'}}>
            <Text style={{color: 'white'}}>Semua</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1, alignItems:'center'}}>
            <Text style={{color: 'white'}}>Restoran</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1, alignItems:'center'}}>
            <Text style={{color: 'white'}}>Katering</Text>
          </TouchableOpacity>
        </View> */}

        <ScrollView>
        {restolist(value).map(({_id, name, city},index)=>{
          
            return(
              <TouchableOpacity 
                key={index} 
                onPress={() =>{
                  navigation.navigate('DetailRestoran', {resto: restolist(value)[index]})
                }} 
                style={styles.cardContainer}
              >
                  
                <View style={{flexDirection: 'row'}}>
                  <View style={{padding:25,margin : 5,borderWidth:1, borderColor:'#004380', borderRadius:7,}}/>
                    <View>
                      <Text style={styles.h1}>{name}</Text>
                      <Text style={styles.h2}>{city}</Text>
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
      marginTop:20,
    
    },
    subtitle: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginVertical: 10,
      },
    banner:{
        width: Dimensions.get('window').width - 50,
        height: 100,
        borderRadius: 15,
      },
    searchBar:{
        flexDirection: 'row',  
        borderWidth:1,
        borderColor: '#004380', 
        borderRadius: 15, 
        alignSelf:'center',
        backgroundColor:'white'
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