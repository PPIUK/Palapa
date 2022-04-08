import React, { useState, useEffect} from 'react';
import imigrasi from './data/imigrasi/';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Transition, Transitioning} from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import {CustomHeader} from '../components/CustomHeader';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);


export default function Restoran({ navigation }) {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("London");
  const pickerRef = React.useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}
  const ref = React.useRef();
    return (
      <Transitioning.View 
        ref={ref}
        transition = {transition}
        style={styles.container}
      >
        <CustomHeader isHome={true} navigation={navigation}/>
        <Text style={styles.title}>
          Restoran & Katering 
        </Text>
        <Text style={styles.subtitle}>
          Discover Indonesian cuisine all over the UK 
        </Text>
        <TouchableOpacity  style={styles.searchBox}>
            <Text style={{flex:1, padding:10}}>
                Ketik nama restoran / Katering / Makanan
            </Text> 
            <FontAwesome name="search" size={20} color="white" style={{backgroundColor:'#004380', paddingHorizontal:10, paddingVertical:5,borderRadius:10}}/>
        </TouchableOpacity>
        <Text style={{width:'90%', padding:30, borderWidth:1, borderColor:'#004380', borderRadius:15, margin:20}}>
          banner, illustrasi
        </Text> 
        <Text style={styles.subtitle}>
          Cari berdasarkan kota:
        </Text>
        <View style={{flex:1, padding: 0, margin: 0}}>
        <Picker
            ref={pickerRef}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="test1" value="1" />
            <Picker.Item label="test2" value="2" />
        </Picker>
        </View>
        <ScrollView>
      

      </ScrollView>
      </Transitioning.View>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : 'white',
      alignItems : 'center',
    },
    title: {
      marginLeft: 20,
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      color: 'red',
    },
    subtitle: {
        margin: 10,
        fontSize: 15,
        alignSelf: 'flex-start',
      },
    searchBox:{
        flexDirection: 'row', 
        width:'90%', 
        borderWidth:1,
        borderColor: 'blue', 
        borderRadius: 15, 
    },
    cardContainer: {
      margin : 5,
      borderWidth : 1,
      borderColor : 'black',
      width: Dimensions.get('window').width - 50,
    },
    card: {
      flexDirection: 'row'
    },
    heading: {
      flex :1,
      padding : 10,
      fontSize : 15,
      fontWeight : '500',
    },
    desc:{
      flexDirection: 'row',
      flex : 1,
      padding : 15,
      alignItems : 'center',
    },
    detail:{
      backgroundColor : 'black',
      paddingHorizontal : 15,
      paddingVertical : 2,
      alignItems : 'center'
    }
  });