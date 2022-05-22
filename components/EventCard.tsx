import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Palette from '../styles/pallete';
import globalStyles from "../styles/global"




const EventCard = ({item}:any) => {
    console.log(item)

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri:item.imageUrl}}/>
            <Text>{item.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        width: "100%",
        height: 180
    },
    image:{
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        overflow: "hidden"
    }
})



export default EventCard;