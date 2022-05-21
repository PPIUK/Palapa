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
import { Text, View, Image } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'https://ppiuk.id/graphql'
}); 
  
const App = () => {
  return (
      <ApolloProvider client={client}>
          <Query query={gql`
          {
              posts {
                  edges {
                    node {
                      title
                      slug
                      id
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                    }
                  }
              }
          }
          `}>
            {({loading, error, data}) => {
              if(loading) {
                return (
                  <View>
                    <Text>Loading...</Text>
                  </View>
                );
              }

              return (
                <View>
                  {data.posts.edges.map((post, key) => {
                      return (
                          <View key={key}>
                              <Text>{post.node.title}</Text>
                              <Image
                                  source={{uri: post.node.featuredImage.node.sourceUrl}}
                                  resizeMode={'cover'}
                                  style={{
                                      width: '100%',
                                      height: 200,
                                      borderRadius: 15,
                                      marginBottom: 5,
                                  }}
                              />
                          </View>
                      );
                  })}
                </View>
              );
            }}
          </Query>
        
      </ApolloProvider>
  )
}

export default App;