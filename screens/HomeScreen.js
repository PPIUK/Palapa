import * as React from 'react';
import { SafeAreaView, TouchableOpacity, Button, Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import {CustomHeader} from '../components/CustomHeader';
import { ScrollView } from 'react-native-gesture-handler';
import CarouselCards from '../components/CarouselCards';

export default function HomeScreen({ navigation }) {
  return (
    <>
    <ScrollView>
    <View style={{backgroundColor:'white'}}>
      <CustomHeader isHome={true} navigation={navigation}/>
      {/* <Image style={styles.image} source={require('../assets/PPIUK2.png')} /> */}
      <CarouselCards />
    </View >
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
       <TouchableOpacity
          style={styles.orangeButton}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('News')}> 
          <Image style={styles.buttonImageIconStyle} source={require('../assets/news.jpeg')} />
          <Text style={styles.buttonTextStyle}>
            News
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.blueButton}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Transportasi')}> 
          <Image style={styles.buttonImageIconStyle} source={require('../assets/bus.jpg')} />
          <Text style={styles.buttonTextStyle}>
            Transportasi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pinkButton}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Keberangkatan')}> 
          <Image style={styles.buttonImageIconStyle} source={require('../assets/planeuk.jpg')} />
          <Text style={styles.buttonTextStyle}>
            Checklist Keberangkatan ke UK
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pinkButton}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Kepulangan')}> 
          <Image style={styles.buttonImageIconStyle} source={require('../assets/planeid.jpg')} />
          <Text style={styles.buttonTextStyle}>
            Checklist Kepulangan ke Indonesia
          </Text>
        </TouchableOpacity>        
        <TouchableOpacity
          style={styles.pinkButton}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Imigrasi')}> 
          <Image style={styles.buttonImageIconStyle} source={require('../assets/imigrasi.jpg')} />
          <Text style={styles.buttonTextStyle}>
          Info terkait Imigrasi
          </Text>
        </TouchableOpacity>        
        <TouchableOpacity
          style={styles.greenButton}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('News')}> 
          <Image style={styles.buttonImageIconStyle} source={require('../assets/policy.jpg')} />
          <Text style={styles.buttonTextStyle}>
          Kebijakan Pemerintah UK & Indonesia
          </Text>
        </TouchableOpacity>        
        <TouchableOpacity
          style={styles.yellowButton}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Restoran Indonesia')}> 
          <Image style={styles.buttonImageIconStyle} source={require('../assets/food.jpg')} />
          <Text style={styles.buttonTextStyle}>
          Daftar Restoran & Catering Indonesia di UK
          </Text>
        </TouchableOpacity>                
      </View>
    </SafeAreaView>
    </ScrollView>
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
    margin: 12,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }, 
 image: {
    alignSelf: 'center',
    width: Dimensions.get('window').height - 550,
    resizeMode:'contain',
  }, 
  pinkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#AA336A',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    borderRadius: 5,
    margin: 5,
  },
  blueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0000CD',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    borderRadius: 5,
    margin: 5,
  },
  greenButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#013220',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    borderRadius: 5,
    margin: 5,
  },
  yellowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9b870c',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    borderRadius: 5,
    margin: 5,
  },
  orangeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fb8500',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },    
});

