import * as React from 'react';
import { SafeAreaView, TouchableOpacity, Button, Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import {CustomHeader} from '../components/CustomHeader';
import { ScrollView } from 'react-native-gesture-handler';
import CarouselData from '../constants/CarouselData';


const CARD_WIDTH = Dimensions.get('window').width * 0.95
const CARD_HEIGHT = Dimensions.get('window').height * 0.3
const SPACING_FOR_CARD_INSET = 5

export default function HomeScreen({ navigation }) {
  return (
    <>
    <CustomHeader isHome={true} navigation={navigation}/>
    <ScrollView>
    <View style={{backgroundColor:'white'}}>


  {
  //https://medium.com/nerd-for-tech/react-native-create-a-horizontal-snap-scrollview-e1d01ac3ba09
  }
     <ScrollView 
     horizontal // Change the direction to horizontal
     pagingEnabled // Enable paging
     decelerationRate={0} // Disable deceleration
     snapToInterval={CARD_WIDTH+10} // Calculate the size for a card including marginLeft and marginRight
     snapToAlignment='center' // Snap to the center
     contentInset={{ // iOS ONLY
       top: 0,
       left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
       bottom: 0,
       right: SPACING_FOR_CARD_INSET // Right spacing for the very last card
     }}
     contentContainerStyle={{ // contentInset alternative for Android
       paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0 // Horizontal spacing before and after the ScrollView
     }}>
        {CarouselData.map(({title, body, imgUrl}, index) =>{
          return (
            <TouchableOpacity 
              key={title} 
              onPress={() => {navigation.navigate("News");}} 
              >
                <View style={styles.cardStyle}>
                <Image 
                  source={{ uri: imgUrl }}
                  style={styles.image}
                />
                <View style={[styles.newstitle, styles.shadow]}>
                  <Text>{body}</Text>
                </View>
                </View>
            </TouchableOpacity>
          );  
        })}
      </ScrollView>

    </View >
    <SafeAreaView>
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
        <TouchableOpacity
          style={styles.yellowButton}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Events')}> 
          <Image style={styles.buttonImageIconStyle} source={require('../assets/food.jpg')} />
          <Text style={styles.buttonTextStyle}>
          Events
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
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT-30,
  },
  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 5,
    borderRadius: 15
  },
  newstitle:{
  position: 'absolute', 
  top: CARD_HEIGHT * 0.8, 
  justifyContent: 'center', 
  alignItems: 'center',
  width: CARD_WIDTH * 0.9,
  height : 50,
  borderRadius:5,
  padding: 5,
  backgroundColor: 'white',
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 20,
  },
});

