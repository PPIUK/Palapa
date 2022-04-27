import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, Image } from "react-native";
 
export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);


function CarouselCardItem ({ item, index }) {
    return (
        <TouchableOpacity
            style={{...styles.container, alignItems:'center'}} 
            key={index}>
            <Image 
                source={{ uri: item.imgUrl }}
                style={styles.image}
            />
            {/* <Text style={styles.header}>{item.title}</Text> */}
            {/* <Text style={styles.body}>{item.body}</Text>     */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        borderRadius: 8,
        width: ITEM_WIDTH,
        height: ITEM_WIDTH,
        // paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        // shadowRadius: 4.65,
        // elevation: 7,
    },
    image: {
        width: ITEM_WIDTH,
        height: 300,
    },
    header: {
        color: "#222",
        fontSize: 36,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20,
        paddingRight: 20
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    }
});

export default CarouselCardItem;