import React, { useState, useEffect} from 'react';
import imigrasi from '../data/imigrasi/';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Transition, Transitioning} from 'react-native-reanimated';
import {CustomHeader} from '../../components/CustomHeader';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default function Imigrasi({ navigation }) {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();
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
        <Text style={{width:'90%', padding:90, backgroundColor: 'grey'}}>
          banner, illustrasi
        </Text> 
        <Text style={styles.title}>
          Jenis Visa UK
        </Text>
        

        <ScrollView>
      

        {imigrasi.map(({title, desc, link}, index) =>{
          return (
            <TouchableOpacity 
              key={title} 
              onPress={() =>{
                ref.current.animateNextTransition();
                setCurrentIndex(index === currentIndex ? null : index);
              }} 
              style={styles.cardContainer}
              >
                <View style={styles.card}>
                  <Text style={styles.heading}>{title}</Text>
                  {index === currentIndex
                  ? <AntDesign name='right' size={15} style={{padding : 15, transform: [{ rotate: '90deg' }]}} />
                  : <AntDesign name='right' size={15} style={{padding : 15}}/>
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