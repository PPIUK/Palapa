// Child screen of Imigrasi, detail of the selected visa

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Linking,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Transition, Transitioning } from "react-native-reanimated";
import { CustomHeader } from "../../components/CustomHeader";

const transition = (
  <Transition.Together>
    <Transition.In type="scale" durationMs={300} />
    <Transition.Change />
    <Transition.Out type="scale" durationMs={200} />
  </Transition.Together>
);

export default function Visa({ navigation, route }) {
  const [currentIndex, setCurrentIndex] = React.useState(null);

  //get type of visa selected from Imigrasi screen
  const { visa } = route.params;

  //Reference for transition
  const ref = React.useRef();

  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={styles.container}
    >
      <CustomHeader isHome={false} navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.title}>{visa.title}</Text>
        <TouchableOpacity
          style={styles.link}
          onPress={() => Linking.openURL(visa.link)}
        >
          <Text style={{ color: "#004380", textDecorationLine: "underline" }}>
            {visa.link}
          </Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>{visa.desc}</Text>

        <ScrollView>
          <TouchableOpacity
            key={"langkah"}
            onPress={() => {
              ref.current.animateNextTransition();
              setCurrentIndex(0 === currentIndex ? null : 0);
            }}
            style={styles.cardContainer}
          >
            {0 === currentIndex ? (
              <View style={{ backgroundColor: "#D1E4FF", borderRadius: 10 }}>
                <View style={styles.card}>
                  <Text style={styles.heading}>Langkah Pembuatan Visa</Text>

                  <AntDesign
                    name="right"
                    size={15}
                    style={{ padding: 15, transform: [{ rotate: "90deg" }] }}
                  />
                </View>
                {visa.langkah.map((test, index) => {
                  return (
                    <View style={styles.desc} key={index}>
                      <Text style={styles.number}>{index + 1}</Text>
                      <Text style={{ flex: 1, marginHorizontal: 5 }}>
                        {test}
                      </Text>
                    </View>
                  );
                })}
              </View>
            ) : (
              <View>
                <View style={styles.card}>
                  <Text style={styles.heading}>Langkah Pembuatan visa</Text>

                  <AntDesign name="right" size={15} style={{ padding: 15 }} />
                </View>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            key={"dokumen"}
            onPress={() => {
              ref.current.animateNextTransition();
              setCurrentIndex(1 === currentIndex ? null : 1);
            }}
            style={styles.cardContainer}
          >
            {1 === currentIndex ? (
              <View style={{ backgroundColor: "#D1E4FF", borderRadius: 10 }}>
                <View style={styles.card}>
                  <Text style={styles.heading}>Dokumen yang diperlukan</Text>

                  <AntDesign
                    name="right"
                    size={15}
                    style={{ padding: 15, transform: [{ rotate: "90deg" }] }}
                  />
                </View>

                {visa.dokumen.map((test, index) => {
                  return (
                    <View style={styles.desc} key={index}>
                      <Text style={styles.number}>{index + 1}</Text>
                      <Text style={{ flex: 1, marginHorizontal: 5 }}>
                        {test}
                      </Text>
                    </View>
                  );
                })}
              </View>
            ) : (
              <View>
                <View style={styles.card}>
                  <Text style={styles.heading}>Dokumen yang diperlukan</Text>

                  <AntDesign name="right" size={15} style={{ padding: 15 }} />
                </View>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            key={"biaya"}
            onPress={() => {
              ref.current.animateNextTransition();
              setCurrentIndex(2 === currentIndex ? null : 2);
            }}
            style={styles.cardContainer}
          >
            {2 === currentIndex ? (
              <View style={{ backgroundColor: "#D1E4FF", borderRadius: 10 }}>
                <View style={styles.card}>
                  <Text style={styles.heading}>Biaya Pembuatan Visa</Text>

                  <AntDesign
                    name="right"
                    size={15}
                    style={{ padding: 15, transform: [{ rotate: "90deg" }] }}
                  />
                </View>
                <View style={styles.desc}>
                  <Text>{visa.biaya}</Text>
                </View>
              </View>
            ) : (
              <View>
                <View style={styles.card}>
                  <Text style={styles.heading}>Biaya Pembuatan visa</Text>
                  <AntDesign name="right" size={15} style={{ padding: 15 }} />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Transitioning.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  content: {
    marginHorizontal: 24,
  },
  title: {
    marginVertical: 15,
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginVertical: 10,
  },
  link: {
    marginBottom: 10,
    fontSize: 15,
    alignSelf: "flex-start",
  },
  cardContainer: {
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#004380",
    width: Dimensions.get("window").width - 50,
  },
  card: {
    flexDirection: "row",
  },
  number: {
    borderColor: "#004380",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: "bold",
    marginRight: 5,
  },

  heading: {
    flex: 1,
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",
  },
  desc: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
});
