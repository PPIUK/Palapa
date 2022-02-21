import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import from local files
import AssetExample from './components/AssetExample';
import Checklist1 from './components/Checklist1';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

function HomeScreen({ navigation }) {
  return (
    <>
    <View style={{ alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
      <Card>
        <AssetExample />
      </Card>
      </>
  );
}

function ChecklistUK() {
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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={ChecklistUK} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;

