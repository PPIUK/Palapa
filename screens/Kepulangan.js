//Checklist Kepulangan

import React, { useState, useEffect } from "react";
import { LinearProgress, CheckBox } from "react-native-elements";
import kepulangancheck from "./data/kepulangancheck";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Transition, Transitioning } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CustomHeader } from "../components/CustomHeader";

//Transition config
const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default function Kepulangan({ navigation }) {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [checkedState, setCheckedState] = useState(
    new Array(kepulangancheck.length).fill(false)
  );

  //Transition Reference
  const ref = React.useRef();
  const ref2 = React.useRef();

  // Checkbox HandleOnChange, changeprogress value
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    save(updatedCheckedState);
  };

  //Async Storage save
  const save = async (updatedCheckedState) => {
    AsyncStorage.clear();
    await AsyncStorage.setItem(
      "kepulangan",
      JSON.stringify(updatedCheckedState)
    );
  };

  //Async Storage load
  const load = async () => {
    let jsonValue = await AsyncStorage.getItem("kepulangan");

    if (jsonValue !== null) {
      setCheckedState(JSON.parse(jsonValue));
    }
  };

  //Load from Async storage everytime screen open
  useEffect(() => {
    load();
  }, []);

  //progress const
  const progress =
    checkedState.filter((value) => value === true).length /
    kepulangancheck.length;

  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={styles.container}
    >
      <CustomHeader isHome={true} navigation={navigation} />
      <View style={{ backgroundColor: "#D1E4FF", marginVertical: 10 }}>
        <Text style={styles.title}>Checklist Kepulangan ke ID</Text>
        <Text style={styles.subtitle}>
          You have completed {}
          <Text style={{ color: "red" }}>
            {checkedState.filter((value) => value === true).length} out of{" "}
            {kepulangancheck.length}
          </Text>
          {} of your document
        </Text>

        <LinearProgress
          style={styles.progressbar}
          value={progress}
          variant={"determinate"}
          color="black"
        />
      </View>
      <ScrollView>
        <Transitioning.View
          ref={ref2}
          transition={transition}
          style={styles.container}
        >
          {kepulangancheck.map(({ title, desc }, index) => {
            return (
              <TouchableOpacity
                key={title}
                onPress={() => {
                  ref2.current.animateNextTransition();
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
                style={styles.cardContainer}
              >
                <View style={styles.card}>
                  <CheckBox
                    left
                    checked={checkedState[index]}
                    onPress={() => handleOnChange(index)}
                    checkedColor="white"
                  />
                  <Text style={styles.heading}>{title}</Text>
                  {index === currentIndex ? (
                    <AntDesign
                      name="right"
                      size={20}
                      style={{
                        color: "white",
                        padding: 15,
                        transform: [{ rotate: "90deg" }],
                      }}
                    />
                  ) : (
                    <AntDesign
                      name="right"
                      size={20}
                      style={{ color: "white", padding: 15 }}
                    />
                  )}
                </View>
                {index === currentIndex && (
                  <View style={styles.desc}>
                    <Text style={{ color: "black" }}>{desc}</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </Transitioning.View>
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
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    margin: 15,
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  progressbar: {
    backgroundColor: "white",
    height: 20,
    margin: 20,
    width: Dimensions.get("window").width - 30,
    borderRadius: 15,
    borderWidth: 2,
  },
  cardContainer: {
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#004380",
    width: Dimensions.get("window").width - 40,
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
    color: "white",
  },
  desc: {
    padding: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#004380",
    borderRadius: 10,
    alignItems: "center",
  },
});
