import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

import Checklist1 from '../components/Checklist1';

export default function ChecklistUKScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Checklist Keberangkatan ke UK
        </Text>
        <Card>
        <Checklist1 />
      </Card>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });