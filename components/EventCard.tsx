import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Palette from '../styles/pallete';

const EventCard = ({item}:any) => {

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri:item.imageUrl}}/>
            <View style={styles.overlay}></View>
            <View style={styles.content}>
                <Text style={styles.eventName}>{item.name}</Text>
                <Text style={styles.eventOrganizator}>{item.organizator}</Text>
                <View style={styles.wrapper}>
                    <MaterialCommunityIcons name="clock-time-four" size={12} color="white" />
                    <Text style={styles.time}>{item.time.day}, {item.time.date}.{item.time.month} {" "} {item.time.from} - {item.time.to}</Text>
                </View>
                <View style={styles.wrapper}>
                    <MaterialIcons name="location-on" size={12} color="white" />
                    <Text style={styles.location}>{item.location.street}, {item.location.postCode} {item.location.city}</Text>
                </View>
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
        fontWeight: "bold",
        marginBottom: 4
    },
    wrapper:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    time: {
        color: Palette.bright,
        marginLeft: 12,
        fontWeight: "bold"
    },
    location: {
        color: Palette.bright,
        marginLeft: 12,
    }
})



export default EventCard;