import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Posts = ({navigation}) => {

  return (
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
          <View style={styles.container}>
            {data.posts.edges.map((post, key) => {
                return (
                    <View key={key}>
                        <Text>{post.node.title}</Text>
                        <TouchableOpacity onPress={() => {
                                navigation.navigate('Post', {id: post.node.id});
                            }}>
                                <Text>Learn more</Text>
                        </TouchableOpacity>
                    </View>
                );
            })}
          </View>
        );
      }}
    </Query>
  )
    
  
}

export default Posts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})