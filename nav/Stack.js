import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Imigrasi
import Imigrasi from '../screens/Imigrasi/Imigrasi';
import Visa from '../screens/Imigrasi/Visa';

//Restoran
import Restoranmenu from '../screens/Restoran/Restoran';
import DetailRestoran from '../screens/Restoran/DetailRestoran';

//Events
import EventsMain from '../screens/Events/EventsMain';
import DetailEvent from '../screens/Events/DetailEvent';

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

const StackEvents = createNativeStackNavigator();

export const EventsStack = () =>{
  return(
  <StackEvents.Navigator initialRouteName='Restoranmenu'>
    <StackEvents.Screen name="Events" component={Events} options={{headerShown: false}}/>
    <StackEvents.Screen name="DetailEvent" component={DetailEvent} options={{headerShown: false}}/>
  </StackEvents.Navigator>
  );
}