import { StyleSheet, Text, useWindowDimensions, View, Image } from 'react-native';
import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import HTML from 'react-native-render-html';

const Post = (props) => {
    const contentWidth = useWindowDimensions().width;

    if (  !props.data.post ) {
        return (
            <View>
                <Text>Loading... </Text>
            </View>
        )
    }
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>{props.data.post.title}</Text>
                <Image
                    source={{uri: props.data.post.featuredImage.node.sourceUrl}}
                    resizeMode={'cover'}
                    style={{
                        width: '100%',
                        height: 200,
                        borderRadius: 15,
                        marginBottom: 5,
                    }}
                />
                <HTML 
                    source={{html: props.data.post.content}}
                    contentWidth={contentWidth}
                />
            </View>
        )
}

const getPostByID = gql`
query getPostbyID($id: ID!) {
    post(id: $id) {
      title
      content
      featuredImage {
        node {
          sourceUrl(size: MEDIUM)
        }
      }
    }
  }
  `;

export default graphql(getPostByID, {
    options: props => {
        const id = props.route.params.id;

        return {
            variables: {
                id,
            }
        }
    }
})(Post);

// export default Post;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
})