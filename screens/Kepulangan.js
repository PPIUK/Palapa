import React, { useState, useEffect} from 'react';
import { LinearProgress, CheckBox } from 'react-native-elements';
import kepulangancheck from './data/kepulangancheck';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Transition, Transitioning} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default function Kepulangan() {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [checkedState, setCheckedState] = useState(
      new Array(kepulangancheck.length).fill(false)
    );
  const ref = React.useRef();

  const handleOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
  
      setCheckedState(updatedCheckedState);
      save(updatedCheckedState);
    };

  const save = async (updatedCheckedState) =>{
      await AsyncStorage.setItem("check", JSON.stringify(updatedCheckedState));
    }

  const load = async() =>{
      let jsonValue = await AsyncStorage.getItem("check");

      if (jsonValue !== null){
        setCheckedState(JSON.parse(jsonValue));
      }
    }

  useEffect(() => {
      load();
    },[]);

    
  const progress = checkedState.filter(value => value === true).length / kepulangancheck.length;

    return (
      <Transitioning.View 
        ref={ref}
        transition = {transition}
        style={styles.container}
      >
        <Text style={styles.title}>
          Checklist Kepulangan ke ID
        </Text>
        <Text style={styles.subtitle}>
          You have completed {(progress*100).toFixed(2)}% of your document
        </Text>
        
        <LinearProgress 
          style={styles.progressbar} 
          value={progress}
          variant={'determinate'}
          color = 'black'
        />

        <ScrollView>
      

        {kepulangancheck.map(({category, subCategories}, index) =>{
          return (
            <TouchableOpacity 
              key={category} 
              onPress={() =>{
                ref.current.animateNextTransition();
                setCurrentIndex(index === currentIndex ? null : index);
              }} 
              style={styles.cardContainer}
              >
                <View style={styles.card}>
                <CheckBox
                    left
                    checked={checkedState[index]}
                    onPress={() => handleOnChange(index)}
                    checkedColor = 'black'
                />
                  <Text style={styles.heading}>{category}</Text>
                  {index === currentIndex
                  ? <AntDesign name='right' size={20} style={{padding : 15, transform: [{ rotate: '90deg' }]}} />
                  : <AntDesign name='right' size={20} style={{padding : 15}}/>
                  }
                </View>
                {index === currentIndex && (
                <View style={styles.desc}>
                  <Text>{subCategories}</Text>
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
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subtitle: {
      margin: 15,
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf : 'flex-start',
    },
    progressbar: {
      backgroundColor : 'white',
      height : 20,
      margin : 20,
      width: Dimensions.get('window').width - 30,
      borderRadius:15,
      borderWidth : 2,
    },
    cardContainer: {
      margin : 10,
      //borderRadius:15,
      borderWidth : 1,
      borderColor : 'black',
      width: Dimensions.get('window').width - 50,
    },
    card: {
      padding : 1,
      //borderRadius:10,
      flexDirection: 'row'
    },
    heading: {
      flex :1,
      padding : 10,
      fontSize : 20,
      fontWeight : '500',
    },
    desc:{
      padding : 15,
      alignItems : 'center',
    },
  });