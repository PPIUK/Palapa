import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Posts = () => {

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
  )
    
  
}

export default Posts

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        padding: 20
    }
})