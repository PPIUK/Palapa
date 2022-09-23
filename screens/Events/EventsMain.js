/*
Eventmain Screen, showing all event from event database that has flag of 1
Flow : Eventmain -> DetailEvent -> EventLink(Webview)
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
import { CustomHeader } from "../../components/CustomHeader";
import DropDownPicker from "react-native-dropdown-picker";
import dataAPI from "../../database/dataAPI";

// initialize ppi array with the first default value 'All PPI' for dropdown menu
const ppi = [{ value: 0, label: "All PPI" }];

export default function EventsMain({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState(ppi);
  const [data, setData] = useState([]); // [] = init value
  const [logo, setLogo] = useState([]);

  //Get data from database
  useEffect(() => {
    getDataFromAPI();
  }, []);

  function getDataFromAPI() {
    dataAPI
      .get("app/application-0-jjbbw/endpoint/HTTP/get_events")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    getLogoFromAPI();
  }

  function getLogoFromAPI() {
    dataAPI
      .get("app/application-0-jjbbw/endpoint/HTTP/get_logo")
      .then(function (response) {
        setLogo(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }
  
  if (!data || !logo) {
    return null;
  }

  // filter data that flag 1.0
  var flagged = data.filter((x) => x.flag == "1.0");
  // take all unique ppi that has event (the last event every ppi)
  const uniqueppi = [
    ...new Map(flagged.map((item) => [item["city"], item])).values(),
  ];

  //Append data from database (flag 1) to ppi array
  uniqueppi.map(
    (item, index) => (ppi[index + 1] = { value: index + 1, label: item.city })
  );

  // return all events with selected ppi from dropdown menu
  function eventslist(selected) {
    if (selected == "0") {
      return flagged;
    } else {
      return flagged.filter((x) => x.city === ppi[selected].label);
    }
  }

  const RemoteImage = ({ uri, desiredWidth }) => {
    const [desiredHeight, setDesiredHeight] = React.useState(0);
  
    Image.getSize(uri, (width, height) => {
      setDesiredHeight((desiredWidth / width) * height);
    });
  
    return (
      <Image
        source={{ uri }}
        style={{
          borderWidth: 1,
          width: desiredWidth,
          height: desiredHeight,
          borderRadius: 15,
          marginVertical: 10,
          alignSelf: "center",
        }}
      />
    );
  };


  // final list
  var content = 
    eventslist(value).map(({ name, penyelenggara, date }, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate("DetailEvent", {
              event: eventslist(value)[index],
            });
          }}
          style={styles.cardContainer}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Image
              style={{
                resizeMode: "contain",
                height: 70,
                width: 70,
                margin: 5,
              }}
              source={{uri : "https://drive.google.com/uc?id=1XH6jR0WGus-xjHsvIog5BL2NEFITbtQ3"}}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.h2}>
                {date.slice(0, 10)} {date.slice(30)}
              </Text>
              <Text style={styles.h1}>{name}</Text>
              <Text style={styles.h2}>by {penyelenggara}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    })
  

  return (
    <View style={styles.container}>
      <CustomHeader isHome={true} navigation={navigation} />

      <View
        style={{
          ...(Platform.OS !== "android" && { zIndex: 10 }),
          width: "90%",
        }}
      >
        <Text style={styles.title}>Events</Text>

        <Image
          style={styles.banner}
          source={require("../../assets/events.jpg")}
        />

        <Text style={styles.subtitle}>Find Events in:</Text>

        <View>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            containerStyle={{ width: 200 }}
          />
        </View>
      </View>

      <ScrollView style={{ marginVertical: 15 }}>
        {
        content.length ? content : 
        <Text style={{fontWeight:"bold", textAlign:"center"}}>
          There's no event listed right now{"\n"}Check again next time!
          </Text>
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "red",
  },
  banner: {
    width: Dimensions.get("window").width - 50,
    height: 150,
    borderRadius: 15,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginVertical: 10,
  },
  cardContainer: {
    margin: 5,
    borderWidth: 1,
    width: Dimensions.get("window").width - 50,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#004380",
    borderRadius: 7,
    marginVertical: 10,
  },
  h1: {
    flex: 1,
    padding: 3,
    fontSize: 17,
    fontWeight: "bold",
  },
  h2: {
    flex: 1,
    padding: 3,
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "italic",
  },
});
