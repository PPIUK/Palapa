import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';
import dataChecklist from './dataChecklist';
import { AntDesign , FontAwesome5} from '@expo/vector-icons';
import { Transition, Transitioning} from 'react-native-reanimated';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default function Checklist() {
  
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [checkedState, setCheckedState] = useState(
    new Array(dataChecklist.length).fill(false)
  );
  const ref = React.useRef();
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  return (
    <Transitioning.View 
      ref={ref}
      transition = {transition}
      style={styles.container}
    >
      <StatusBar hidden />
      {dataChecklist.map(({category, subCategories}, index) =>{
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
    
    </Transitioning.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : 200,
    alignItems : 'center',
    backgroundColor : 'white',
  },
  cardContainer: {
    margin : 10,
    borderRadius:15,
    borderWidth : 1,
    borderColor : '#D1E4FF',
    width : '90%',
  },
  card: {
    padding : 10,
    borderRadius:10,
    backgroundColor : '#D1E4FF',
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
})