import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default function HomeScreen({ navigation }) {
  return (
    <>
    <View style={{ alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Text style={styles.paragraph}>
        PPI UK APP PALAPA
      </Text>
      <Image style={{...styles.logo, justifyContent:'center', width: Dimensions.get('window').width - 50, resizeMode:'contain'}} source={require('../assets/PPIUK.png')} />
    </View>
      </>
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