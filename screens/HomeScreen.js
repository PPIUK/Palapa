import * as React from 'react';
import { Button, Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default function HomeScreen({ navigation }) {
  return (
    <>
    <View>
      <Text style={styles.header}>PPI UK APP</Text>
      <Image style={styles.image} source={require('../assets/PPIUK.png')} />
      </View >
      <View style={styles.container}>
      <Button 
        title="Transportasi"
        fontSize="20"
        margin="10"
        onPress={() => navigation.navigate('Transportasi')}
      />
      <Text style={styles.button1}> </Text>
      <Button 
        title="Checklist keberangkatan UK"
        fontSize="10"
        color="#AA336A"      
        onPress={() => navigation.navigate('Keberangkatan')}
      />
      <Text style={styles.button2}> </Text>
      <Button 
        title="Checklist Kepulangan ke ID"
        fontSize="20"
        color="#AA336A"      
        onPress={() => navigation.navigate('Kepulangan')}
      />
      <Text style={styles.button1}> </Text>
      <Button 
        title="Info terkait Imigrasi"
        fontSize="20"
        color="#AA336A"      
        onPress={() => navigation.navigate('Imigrasi')}
      />
      <Text style={styles.button1}> </Text>
      <Button 
        title="Kebijakan Terbaru dari Pemerintah UK & Indonesia"
        fontSize="20"
        color="#013220"      
        onPress={() => navigation.navigate('News')}
      />
      <Text style={styles.button1}> </Text>
      <Button 
        title="Daftar Restoran & Catering Indonesia di UK"
        fontSize="20"
        color="#9b870c"      
        onPress={() => navigation.navigate('Restoran Indonesia')}
      />                  
  </View>     
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }, 
 image: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 50,
    resizeMode:'contain',
  }, 
  button1: {
    margin: 1,
    fontSize: 10,
    color:'black',    
  },    
  button2: {
    margin: 1,
    fontSize: 10,
    color:'#FFFFFF',    
  },    
});
