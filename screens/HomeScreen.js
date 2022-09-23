/*
HomeScreen function - first screen you see when opening app 
Returns custom header and news carousel 
followed by buttons(touchable opacity) navigating to other screens
*/

import * as React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";
import { CustomHeader } from "../components/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { NewsCarousel } from "../components/NewsCarousel";

// Icons
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen({ navigation }) {
  return (
    <>
      <CustomHeader isHome={true} navigation={navigation} />
      <ScrollView>
        <NewsCarousel navigation={navigation} />

        <SafeAreaView>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.Button}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("News", { uri: "/" })}
            ><FontAwesome 
                  name={"newspaper-o"}
                  size={30} 
                  color={"white"} 
                  style={{marginLeft: 20}}
              />
              <Text style={styles.buttonTextStyle}>News</Text>
              {/* <Image
                style={styles.buttonImageIconStyle}
                source={require("../assets/news.png")}
              /> */}
              
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Keberangkatan")}
            >
              <MaterialIcons 
            name={'flight-takeoff'}
            size={35} 
            color={"white"} 
            style={{marginLeft: 20}}
        />
              <Text style={styles.buttonTextStyle}>
                Checklist Keberangkatan ke UK
              </Text>
              {/* <Image
                style={styles.buttonImageIconStyle}
                source={require("../assets/planeUK.png")}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Kepulangan")}
            >
              <MaterialIcons 
            name={'flight-land'}
            size={35} 
            color={"white"} 
            style={{marginLeft: 20}}
        />
              <Text style={styles.buttonTextStyle}>
                Checklist Kepulangan ke Indonesia
              </Text>
              {/* <Image
                style={styles.buttonImageIconStyle}
                source={require("../assets/planeid.png")}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Imigrasi")}
            >
              <FontAwesome5 
            name={'passport'}
            size={30} 
            color={"white"} 
            style={{marginLeft: 20}}
        />
              <Text style={styles.buttonTextStyle}>Info terkait Imigrasi</Text>
              {/* <Image
                style={styles.buttonImageIconStyle}
                source={require("../assets/imigrasi.png")}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Restoran Indonesia")}
            >
              <Ionicons 
            name={'restaurant-outline'}
            size={30} 
            color={"white"} 
            style={{marginLeft: 20}}
        />
              <Text style={styles.buttonTextStyle}>
                Daftar Restoran & Catering Indonesia di UK
              </Text>
              {/* <Image
                style={styles.buttonImageIconStyle}
                source={require("../assets/food.png")}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Events")}
            >
              <MaterialIcons
            name={'event'}
            size={30} 
            color={"white"} 
            style={{marginLeft: 20}}
        />
              <Text style={styles.buttonTextStyle}>Events</Text>
              {/* <Image
                style={styles.buttonImageIconStyle}
                source={require("../assets/event.png")}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Kontak")}
            >
              <AntDesign
            name={'contacts'}
            size={30} 
            color={"white"} 
            style={{marginLeft: 20}}
        />
              <Text style={styles.buttonTextStyle}>Kontak</Text>
              {/* <Image
                style={styles.buttonImageIconStyle}
                source={require("../assets/contact.png")}
              /> */}
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ffffff",
    padding: 8,
  },
  Button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#004380",
    borderColor: "#fff",
    height: 60,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 7,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    alignSelf: "flex-end",
    resizeMode: "stretch",
  },
  buttonTextStyle: {
    flex: 1,
    color: "#fff",
    paddingHorizontal: 15,
    fontWeight: "bold",
    fontSize: 15,
    marginHorizontal: 5,
  },
});
