import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";


const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Ketik nama restoran / Katering / Makanan"
          placeholderTextColor="#000" 
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
        
        {props.clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              props.setSearchPhrase("")
          }}/>
        )}
      </View>
      {props.clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              props.setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginVertical: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    borderColor: '#004380', 
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    paddingLeft:16,
    flexDirection: "row",
    width: "85%",
    borderColor: '#004380', 
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: "90%",
    color: 'black'
  },
});