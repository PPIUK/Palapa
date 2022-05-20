// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { MainDrawer } from './nav/Drawer'

// export default function App() {
//  return (
//     <NavigationContainer>
//       <MainDrawer/>
//     </NavigationContainer>
//  );
// }

import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Posts from './Posts/Posts';
import Post from './Posts/Post';

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'https://ppiuk.id/graphql'
}); 
  
const App = () => {
  return (
    <NavigationContainer>
      {/* <ApolloClient client={client}> */}
        <Stack.Navigator>
          <Stack.Screen name="Posts" component={Posts}></Stack.Screen>
          <Stack.Screen name="Post" component={Post}></Stack.Screen>
        </Stack.Navigator>
      {/* </ApolloClient> */}
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  }
})
