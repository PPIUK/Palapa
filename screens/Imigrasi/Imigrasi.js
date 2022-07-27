import React, { useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Transition, Transitioning} from 'react-native-reanimated';
import {CustomHeader} from '../../components/CustomHeader';
import dataAPI from '../../database/dataAPI';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default function Imigrasi({ navigation }) {
  const [data, setData] = useState([]); // [] = init value
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  useEffect( () => {getDataFromAPI()}, [] )

  function getDataFromAPI() {
    dataAPI.get('app/application-0-jjbbw/endpoint/HTTP/get_imigrasi')
    .then(function(response) {
      setData(response.data);
    }).catch(function(error) {
      console.log(error);
    })
  }

  if (!data) {
    return (
      <Transitioning.View 
        ref={ref}
        transition = {transition}
        style={styles.container}
      >
        <CustomHeader isHome={true} navigation={navigation}/>
        <Text style={styles.title}>
          IMIGRASI
        </Text>
        <Image style={styles.banner} source={require('../../assets/visa.jpg')} />
        <Text style={styles.title}>
          Jenis Visa UK
        </Text>
      </Transitioning.View>
    )
  }

    return (
      
      <Transitioning.View 
        ref={ref}
        transition = {transition}
        style={styles.container}
      >
        <CustomHeader isHome={true} navigation={navigation}/>
        <Text style={styles.title}>
          IMIGRASI
        </Text>
        <Image style={styles.banner} source={require('../../assets/visa.jpg')} />
        <Text style={styles.title}>
          Jenis Visa UK
        </Text>
        

        <ScrollView>
      

        {data.map(({_id, title, desc}, index) =>{
          return (
            
            <TouchableOpacity 
              key={title} 
              onPress={() =>{
                ref.current.animateNextTransition();
                setCurrentIndex(index === currentIndex ? null : index);
              }} 
              
              style={styles.cardContainer}
              >
                {/* {console.log(data[index])} */}
                {index === currentIndex
                  ? 
                  <View style={{backgroundColor:'#D1E4FF', borderRadius:15}}>
                    <View style={styles.card}>
                      <Text style={styles.heading}>{title}</Text>
                      {index === currentIndex
                      ? <AntDesign name='right' size={15} style={{color:'black', padding : 15, transform: [{ rotate: '90deg' }]}} />
                      : <AntDesign name='right' size={15} style={{color:'black', padding : 15}}/>
                      }
                    </View>

                    {index === currentIndex && (
                      <View style={styles.desc}>
                        <Text style={{flex : 1}}>{desc}</Text>
                        <TouchableOpacity 
                        style = {styles.detail}
                        onPress={() => navigation.navigate('Visa', {visa: data[index]})}>
                          <Text style = {{color : 'white'}}>detail</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                  : 
                  <View>
                    <View style={styles.card}>
                    <Text style={styles.heading}>{title}</Text>
                    {index === currentIndex
                      ? <AntDesign name='right' size={15} style={{color:'black', padding : 15, transform: [{ rotate: '90deg' }]}} />
                      : <AntDesign name='right' size={15} style={{color:'black', padding : 15}}/>
                    }
                  </View>
                    {index === currentIndex && (
                      <View style={styles.desc}>
                        <Text style={{flex : 1}}>{desc}</Text>
                        <TouchableOpacity 
                          style = {styles.detail}
                          onPress={() => navigation.navigate('Visa', title)}>
                          <Text style = {{color : 'white'}}>detail</Text>
                        </TouchableOpacity>
                      </View>
                    )} 
                </View>
              }            
            </TouchableOpacity>         
          );
        })}
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
      margin: 24,
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
    },
    banner:{
      width: Dimensions.get('window').width - 50,
      height: 250,
      borderRadius: 15,
      resizeMode: 'contain',
    },
    cardContainer: {
      margin : 10,
      borderRadius:15,
      borderWidth: 1,
      borderColor : '#004380',
      width: Dimensions.get('window').width - 50,
    },
    card: {
      padding : 1,
      borderRadius:10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    heading: {
      flex :1,
      padding : 10,
      fontSize : 15,
      fontWeight : 'bold',
      color:'black',
    },
    desc:{
      flexDirection: 'row',
      flex : 1,
      padding : 15,
      alignItems : 'center',
      fontWeight : 'bold',
      borderRadius:15,
    },
    detail:{
      backgroundColor : '#004380',
      paddingHorizontal : 15,
      paddingVertical : 5,
      alignItems : 'center',
      borderRadius :20,
    }
  });