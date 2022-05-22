import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Palette from '../styles/pallete';
import globalStyles from "../styles/global"

const EventCard = ({item}:any) => {
    // console.log(item)

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri:item.imageUrl}}/>
            <View style={styles.overlay}></View>
            <View style={styles.content}>
                <Text style={styles.eventName}>{item.name}</Text>
                <Text style={styles.eventOrganizator}>{item.organizator}</Text>
                <Text style={styles.eventName}>{item.name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        width: "100%",
        height: 180,
        position: "relative",
        marginBottom: 20,
        borderRadius: 5,
        overflow: "hidden"
    },
    overlay:{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: Palette.dark,
        opacity: 0.45
    },
    image:{
        width: "100%",
        height: "100%",
    },
    content: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 12,
        paddingBottom: 14
    },
    eventName: {
        color: Palette.bright,
        fontSize: 26,
        fontFamily: 'Teko_500Medium'
    },
    eventOrganizator: {
        color: Palette.bright,
        fontSize: 12,
    }
})



export default EventCard;