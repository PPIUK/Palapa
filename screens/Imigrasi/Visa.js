// Child screen of Imigrasi, detail of the selected visa 

import React, { useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
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

export default function Visa({ navigation , route}) {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  
  //get type of visa selected from Imigrasi screen
  const {visa} = route.params;

  //Reference for transition
  const ref = React.useRef();

    return (
      <Transitioning.View 
        ref={ref}
        transition = {transition}
        style={styles.container}
      >
        <CustomHeader isHome={false} navigation={navigation}/>
        <Text style={styles.title}>
          Pengurusan Visa ({visa.title})
        </Text>
        

        <ScrollView>
      
             <TouchableOpacity 
              key={'langkah'} 
              onPress={() =>{
                ref.current.animateNextTransition();
                setCurrentIndex(0 === currentIndex ? null : 0);
              }} 
              style={styles.cardContainer}
              >
                {0 === currentIndex
                ? 
                <View style={{backgroundColor:'#D1E4FF', borderRadius:10}}>
                  <View style={styles.card}>
                    <Text style={styles.heading}>Langkah Pembuatan Visa</Text>
                    {0 === currentIndex
                    ? <AntDesign name='right' size={15} style={{padding : 15, transform: [{ rotate: '90deg' }]}} />
                    : <AntDesign name='right' size={15} style={{padding : 15}}/>
                    }
                  </View>
                  {0 === currentIndex && (
                  <View style={styles.desc}>
                      <Text>
                        {visa.langkah}
                      </Text>
                  </View>
                  )}
                </View>

                :

                <View>
                  <View style={styles.card}>
                    <Text style={styles.heading}>Langkah Pembuatan visa</Text>
                    {0 === currentIndex
                    ? <AntDesign name='right' size={15} style={{padding : 15, transform: [{ rotate: '90deg' }]}} />
                    : <AntDesign name='right' size={15} style={{padding : 15}}/>
                    }
                  </View>
                  {0 === currentIndex && (
                  <View style={styles.desc}>
                      <Text>
                        {visa.title}
                      </Text>
                  </View>
                  )}
                </View>
            }
            </TouchableOpacity>


            <TouchableOpacity 
              key={'dokumen'} 
              onPress={() =>{
                ref.current.animateNextTransition();
                setCurrentIndex(1 === currentIndex ? null : 1);
              }} 
              style={styles.cardContainer}
              >
                {1 === currentIndex
                ? 
                <View style={{backgroundColor:'#D1E4FF', borderRadius:10}}>
                  <View style={styles.card}>
                    <Text style={styles.heading}>Dokumen yang diperlukan</Text>
                    {1 === currentIndex
                    ? <AntDesign name='right' size={15} style={{padding : 15, transform: [{ rotate: '90deg' }]}} />
                    : <AntDesign name='right' size={15} style={{padding : 15}}/>
                    }
                  </View>
                  {1 === currentIndex && (
                  <View style={styles.desc}>
                      <Text>
                        {visa.dokumen}
                      </Text>
                  </View>
                  )}
                </View>

                :

                <View>
                  <View style={styles.card}>
                    <Text style={styles.heading}>Dokumen yang diperlukan</Text>
                    {1 === currentIndex
                    ? <AntDesign name='right' size={15} style={{padding : 15, transform: [{ rotate: '90deg' }]}} />
                    : <AntDesign name='right' size={15} style={{padding : 15}}/>
                    }
                  </View>
                  {1 === currentIndex && (
                  <View style={styles.desc}>
                      <Text>
                        {visa.title}
                      </Text>
                  </View>
                  )}
                </View>
            }
            </TouchableOpacity>
            <TouchableOpacity 
              key={'biaya'} 
              onPress={() =>{
                ref.current.animateNextTransition();
                setCurrentIndex(2 === currentIndex ? null : 2);
              }} 
              style={styles.cardContainer}
              >
                {2 === currentIndex
                ? 
                <View style={{backgroundColor:'#D1E4FF', borderRadius:10}}>
                  <View style={styles.card}>
                    <Text style={styles.heading}>Biaya Pembuatan Visa</Text>
                    {2 === currentIndex
                    ? <AntDesign name='right' size={15} style={{padding : 15, transform: [{ rotate: '90deg' }]}} />
                    : <AntDesign name='right' size={15} style={{padding : 15}}/>
                    }
                  </View>
                  {2 === currentIndex && (
                  <View style={styles.desc}>
                      <Text>
                        {visa.biaya}
                      </Text>
                  </View>
                  )}
                </View>

                :

                <View>
                  <View style={styles.card}>
                    <Text style={styles.heading}>Biaya Pembuatan visa</Text>
                    {2 === currentIndex
                    ? <AntDesign name='right' size={15} style={{padding : 15, transform: [{ rotate: '90deg' }]}} />
                    : <AntDesign name='right' size={15} style={{padding : 15}}/>
                    }
                  </View>
                  {2 === currentIndex && (
                  <View style={styles.desc}>
                      <Text>
                        {visa.title}
                      </Text>
                  </View>
                  )}
                </View>
            }
            </TouchableOpacity>
             

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
      fontSize: 25,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
    },
    cardContainer: {
      margin : 10,
      borderRadius:10,
      borderWidth: 1,
      borderColor : '#004380',
      width: Dimensions.get('window').width - 50,
    },
    card: {
      flexDirection: 'row',  
    },
    heading: {
      flex :1,
      padding : 10,
      fontSize : 15,
      fontWeight : 'bold',
      alignItems : 'center'
    },
    desc:{
      padding : 15,
      alignItems : 'center',
    },
  });