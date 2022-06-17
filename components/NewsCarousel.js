import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ScrollView } from 'react-native-gesture-handler';

const CARD_WIDTH = Dimensions.get('window').width * 0.9
const CARD_HEIGHT = Dimensions.get('window').height * 0.3
const SPACING_FOR_CARD_INSET = 20

const client = new ApolloClient({
    uri: 'https://ppiuk.id/graphql'
  }); 

export function NewsCarousel({ navigation }) {
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
                      uri
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
                  <View style={styles.cardStyle}>
                    <Text></Text>
                  </View>
                );
              }

              return (
                <ScrollView
                  horizontal // Change the direction to horizontal
                  pagingEnabled // Enable paging
                  decelerationRate={0} // Disable deceleration
                  snapToInterval={CARD_WIDTH+10} // Calculate the size for a card including marginLeft and marginRight
                  snapToAlignment='center' // Snap to the center
                  alwaysBounceHorizontal={true}
                  contentInset={{ // iOS ONLY
                    top: 0,
                    left: SPACING_FOR_CARD_INSET , // Left spacing for the very first card
                    bottom: 0,
                    right: SPACING_FOR_CARD_INSET // Right spacing for the very last card
                  }}
                  contentContainerStyle={{ // contentInset alternative for Android
                    paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0 // Horizontal spacing before and after the ScrollView
                  }}>
                    {data.posts.edges.map((post, key) => {
                      return (
                          <TouchableOpacity 
                            key={key}
                            onPress={() => {
                                navigation.navigate('News', {uri: post.node.uri})
                            }}> 
                              <View style={styles.cardStyle}>
                                <Image
                                  source={{uri: post.node.featuredImage.node.sourceUrl}}
                                  resizeMode={'cover'}
                                  style={styles.image}
                                />
                                <View style={[styles.newstitle, styles.shadow]}>
                                  <Text style={{fontSize: 16, fontWeight:'bold', justifyContent: 'center'}}>{post.node.title}</Text>
                                </View>
                              </View>
                          </TouchableOpacity>
                      );
                  })}
                </ScrollView>
              );
            }}
          </Query>
        </ApolloProvider>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
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
  })