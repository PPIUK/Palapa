import React, { useState, useEffect} from 'react';
import visa from '../data/visa/';
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
  const jenisVisa = route.params;
  const ref = React.useRef();
    return (
      <Transitioning.View 
        ref={ref}
        transition = {transition}
        style={styles.container}
      >
        <CustomHeader isHome={false} navigation={navigation}/>
        <Text style={styles.title}>
          Pengurusan Visa ({jenisVisa})
        </Text>
        

        <ScrollView>
      

        {visa.map(({title, StudentVisa, VisitorVisa, DependentVisa, GraduateVisa}, index) =>{
          return (
            
            <TouchableOpacity 
              key={title} 
              onPress={() =>{
                ref.current.animateNextTransition();
                setCurrentIndex(index === currentIndex ? null : index);
              }} 
              style={styles.cardContainer}
              >
                {index === currentIndex
                ? 
                <View style={{backgroundColor:'#D1E4FF', borderRadius:10}}>
                  <View style={styles.card}>
                    <Text style={styles.heading}>{title}</Text>
                    {index === currentIndex
                    ? <AntDesign name='right' size={15} style={{padding : 15, transform: [{ rotate: '90deg' }]}} />
                    : <AntDesign name='right' size={15} style={{padding : 15}}/>
                    }
                  </View>
                  {index === currentIndex && (
                  <View style={styles.desc}>
                      <Text>
                        {jenisVisa === 'Student Visa'? StudentVisa
                        :jenisVisa === 'Visitor Visa'? VisitorVisa
                        :jenisVisa === 'Dependent Visa'? DependentVisa
                        :GraduateVisa}
                      </Text>
                  </View>
                  )}
                </View>

                :

                <View>
                  <View style={styles.card}>
                    <Text style={styles.heading}>{title}</Text>
                    {index === currentIndex
                    ? <AntDesign name='right' size={15} style={{padding : 15, transform: [{ rotate: '90deg' }]}} />
                    : <AntDesign name='right' size={15} style={{padding : 15}}/>
                    }
                  </View>
                  {index === currentIndex && (
                  <View style={styles.desc}>
                      <Text>
                        {jenisVisa === 'Student Visa'? StudentVisa
                        :jenisVisa === 'Visitor Visa'? VisitorVisa
                        :jenisVisa === 'Dependent Visa'? DependentVisa
                        :GraduateVisa}
                      </Text>
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