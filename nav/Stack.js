import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Imigrasi
import Imigrasi from '../screens/Imigrasi/Imigrasi';
import Visa from '../screens/Imigrasi/Visa';

//Restoran
import Restoranmenu from '../screens/Restoran/Restoran';
import DetailRestoran from '../screens/Restoran/DetailRestoran';

const StackImigrasi = createNativeStackNavigator();

export const ImigrasiStack = () =>{
  return(
  <StackImigrasi.Navigator initialRouteName='ImigrasiScreen'>
    <StackImigrasi.Screen name="ImigrasiScreen" component={Imigrasi} options={{headerShown: false}}/>
    <StackImigrasi.Screen name="Visa" component={Visa} options={{headerShown: false}}/>
  </StackImigrasi.Navigator>
  );
}

const StackRestoran = createNativeStackNavigator();

export const RestoranStack = () =>{
  return(
  <StackRestoran.Navigator initialRouteName='Restoranmenu'>
    <StackRestoran.Screen name="Restoran" component={Restoranmenu} options={{headerShown: false}}/>
    <StackRestoran.Screen name="DetailRestoran" component={DetailRestoran} options={{headerShown: false}}/>
  </StackRestoran.Navigator>
  );
}