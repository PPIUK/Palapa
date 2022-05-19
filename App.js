import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainDrawer } from './nav/Drawer'

export default function App() {
 return (
    <NavigationContainer>
      <MainDrawer/>
    </NavigationContainer>
 );
}
