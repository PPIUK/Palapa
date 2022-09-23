/*
Imigrasi Screen - Showing all type of visa desc and button to Visa screen
*/

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Transition, Transitioning } from "react-native-reanimated";
import { CustomHeader } from "../../components/CustomHeader";
import imigrasi from "../data/imigrasi/";

const transition = (
  <Transition.Together>
    <Transition.In type="scale" durationMs={300} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default function Imigrasi({ navigation }) {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={styles.container}
    >
      <CustomHeader isHome={true} navigation={navigation} />
      <Text style={styles.title}>IMIGRASI</Text>
      <Image style={styles.banner} source={require("../../assets/visa.jpg")} />
      <Text style={styles.subtitle}>Jenis Visa UK</Text>

      <ScrollView>
        {imigrasi.map(({ title, desc }, index) => {
          return (
            <TouchableOpacity
              key={title}
              onPress={() => {
                ref.current.animateNextTransition();
                setCurrentIndex(index === currentIndex ? null : index);
              }}
              style={styles.cardContainer}
            >
              {index === currentIndex ? (
                <View style={{ backgroundColor: "#D1E4FF", borderRadius: 15 }}>
                  <View style={styles.card}>
                    <Text style={styles.heading}>{title}</Text>
                    <AntDesign
                      name="right"
                      size={15}
                      style={{
                        color: "black",
                        padding: 15,
                        transform: [{ rotate: "90deg" }],
                      }}
                    />
                  </View>

                  <View style={styles.desc}>
                    <Text style={{ flex: 1 }}>{desc}</Text>
                    <TouchableOpacity
                      style={styles.detail}
                      onPress={() =>
                        navigation.navigate("Visa", { visa: imigrasi[index] })
                      }
                    >
                      <Text style={{ color: "white", fontWeight: "bold" }}>
                        Detail
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                  <View style={styles.card}>
                    <Text style={styles.heading}>{title}</Text>

                    <AntDesign
                      name="right"
                      size={15}
                      style={{ color: "black", padding: 15 }}
                    />
                  </View>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Transitioning.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  title: {
    margin: 24,
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  subtitle: {
    margin: 20,
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  banner: {
    width: Dimensions.get("window").width - 50,
    height: 150,
    borderRadius: 15,
    resizeMode: "cover",
  },
  cardContainer: {
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#004380",
    width: Dimensions.get("window").width - 50,
  },
  card: {
    padding: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    flex: 1,
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  desc: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    fontWeight: "bold",
    borderRadius: 15,
  },
  detail: {
    backgroundColor: "#004380",
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    margin: 10,
  },
});
