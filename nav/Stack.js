import Imigrasi from '../screens/Imigrasi/Imigrasi';
import Visa from '../screens/Imigrasi/Visa';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CarouselCards from '../components/CarouselCards';
import Web from '../screens/Web';

const StackImigrasi = createNativeStackNavigator();

export const ImigrasiStack = () =>{
  return(
  <StackImigrasi.Navigator initialRouteName='ImigrasiScreen'>
    <StackImigrasi.Screen name="ImigrasiScreen" component={Imigrasi} options={{headerShown: false}}/>
    <StackImigrasi.Screen name="Visa" component={Visa} options={{headerShown: false}}/>
  </StackImigrasi.Navigator>
  );
}

const StackCarousel = createNativeStackNavigator();

export function CarouselStack() {
  return (
    <NavigationContainer independent={true}>
      <StackCarousel.Navigator initialRouteName="PALAPA">
        <StackCarousel.Screen name="PALAPA" component={CarouselCards} options={{headerShown: false}}/>
        <StackCarousel.Screen name="NEWS" component={Web} />
      </StackCarousel.Navigator>
    </NavigationContainer>
  );
}