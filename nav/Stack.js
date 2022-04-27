import Imigrasi from '../screens/Imigrasi/Imigrasi';
import Visa from '../screens/Imigrasi/Visa';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

export const NewsStack = () =>{
  return(
  <StackImigrasi.Navigator initialRouteName='CarouselCards'>
    <StackImigrasi.Screen name="CarouselCards" component={CarouselCards} options={{headerShown: false}}/>
    <StackImigrasi.Screen name="Web" component={Web} options={{headerShown: false}}/>
  </StackImigrasi.Navigator>
  );
}