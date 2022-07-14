import React, { useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image, ActivityIndicator} from 'react-native';
import { Transition, Transitioning} from 'react-native-reanimated';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import {CustomHeader} from '../../components/CustomHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import restoran from '../../db/data/restoran/';
import SearchBar from "./SearchBar";
import List from "./List";

const ppi = 
  restoran.map((item, index) => (
    {label: item.title, value: index}
));

export default function Restoran({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState(ppi);

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  useEffect(() => {
    setFakeData(restoran);
  }, []);

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
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />


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
        </View>

        {!fakeData ? (
            <ActivityIndicator size="large" />
          ) : (
            
              <List
                searchPhrase={searchPhrase}
                data={fakeData}
                setClicked={setClicked}
              />
            
          )}

        <ScrollView>
          {restoran[value]["restoran"].map(({nama, tags},index)=>{
            return(
              <TouchableOpacity 
                key={index} 
                onPress={() =>{
                  navigation.navigate('DetailRestoran', {ppiIndex: value, restoIndex: index})
                }} 
                style={styles.cardContainer}
              >
                  
                <View style={{flexDirection: 'row'}}>
                  <View style={{padding:25,margin : 5,borderWidth:1, borderColor:'#004380', borderRadius:7,}}/>
                    <View>
                      <Text style={styles.h1}>{nama}</Text>
                      <Text style={styles.h2}>{tags}</Text>
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