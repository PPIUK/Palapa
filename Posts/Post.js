import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';

const Post = (props) => {
  return (
    <View style={styles.container}>
      <Text>Post</Text>
    </View>
  )
}

export default Post;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})