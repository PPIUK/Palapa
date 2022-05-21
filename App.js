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

import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Posts from './Posts/Posts';
import { ScrollView } from 'react-native-gesture-handler';

const client = new ApolloClient({
  uri: 'https://ppiuk.id/graphql'
}); 
  
const App = () => {
  return (
    <ScrollView>
      <ApolloProvider client={client}>
        <Posts/>
      </ApolloProvider>
    </ScrollView>
  )
}

export default App;
