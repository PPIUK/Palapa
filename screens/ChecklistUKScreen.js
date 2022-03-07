import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { useState} from 'react';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { LinearProgress } from 'react-native-elements';
import CheckboxComponent from '../components/CheckBox.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ChecklistUKScreen() {
  const [count, setCount] = useState(0)
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  const [checked5, setChecked5] = useState(false)
  const [checked6, setChecked6] = useState(false)
    return (
      <View style={styles.container}>
      
        <Text style={styles.paragraph}>
          Checklist Keberangkatan ke UK
        </Text>
        
        <LinearProgress 
          style={{ marginVertical: 10 }} 
          value={count}
          variant={'determinate'}
        />
        
        <Card>

        <TouchableOpacity 
        onPress={ checked1? ()=> {setCount(count - 1/6); setChecked1(false);} : ()=> {setCount(count + 1/6); setChecked1(true)} }
        >
           <CheckboxComponent
            desc= "Passport" 
            />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={ checked2? ()=> {setCount(count - 1/6); setChecked2(false);} : ()=> {setCount(count + 1/6); setChecked2(true)} }
        >
           <CheckboxComponent
            desc= "Visa dan BRP" 
            />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={ checked3? ()=> {setCount(count - 1/6); setChecked3(false);} : ()=> {setCount(count + 1/6); setChecked3(true)} }
        >
           <CheckboxComponent
            desc= "Confirmation of Acceptance for studies (CAS)" 
            />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={ checked4? ()=> {setCount(count - 1/6); setChecked4(false);} : ()=> {setCount(count + 1/6); setChecked4(true)} }
        >
           <CheckboxComponent
            desc= "Tuberculosis Detection Medical Certificate" 
            />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={ checked5? ()=> {setCount(count - 1/6); setChecked5(false);} : ()=> {setCount(count + 1/6); setChecked5(true)} }
        >
           <CheckboxComponent
            desc= "English Language Certificate" 
            />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={ checked6? ()=> {setCount(count - 1/6); setChecked6(false);} : ()=> {setCount(count + 1/6); setChecked6(true)} }
        >
           <CheckboxComponent
            desc= "Personal Documents" 
            />
        </TouchableOpacity>
        

      </Card>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });