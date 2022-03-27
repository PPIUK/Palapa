import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import DrawerItems from './constants/DrawerItems';
import NoScreen from './screens/NoScreen';
import HomeScreen from './screens/HomeScreen';
import Keberangkatan from './screens/Keberangkatan';
import Kepulangan from './screens/Kepulangan';
import Imigrasi from './screens/Imigrasi';
import Visa from './screens/Visa';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Imigrasimenu = () =>{
  return(
  <Stack.Navigator>
    <Stack.Screen name="Imigrasi" component={Imigrasi} options={{headerShown: false}} />
    <Stack.Screen name="Visa" component={Visa} options={{headerShown: false}}/>
  </Stack.Navigator>
  );
}
export default function App() {
 return (
<NavigationContainer>
<Drawer.Navigator 
  drawerType="front"
  initialRouteName="Profile"
  screenOptions={{
    activeTintColor: '#e91e63',
    itemStyle: { marginVertical: 10 },
  }}>
  {
    DrawerItems.map(drawer=><Drawer.Screen 
    key={drawer.name}
    name={drawer.name} 
    options={{
    drawerIcon:({focused})=>
      drawer.iconType==='Material' ? 
        <MaterialCommunityIcons 
          name={drawer.iconName}
          size={24} 
          color={focused ? "#e91e63" : "black"} 
      />
    :
    drawer.iconType==='Feather' ?
      <Feather 
        name={drawer.iconName}
        size={24} 
        color={focused ? "#e91e63" : "black"} 
      />
    :
      <FontAwesome5 
        name={drawer.iconName}
        size={24} 
        color={focused ? "#e91e63" : "black"} 
      /> 
    }} 
      component={
        drawer.name==='PALAPA' ? HomeScreen 
          : drawer.name==='Keberangkatan' ? Keberangkatan 
          : drawer.name==='Kepulangan' ? Kepulangan
          : drawer.name==='Imigrasi' ? Imigrasimenu
            : NoScreen
    }
    
/>)
       }
       
</Drawer.Navigator>
</NavigationContainer>
 );
}
