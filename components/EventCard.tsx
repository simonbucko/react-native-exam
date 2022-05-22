import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Palette from '../styles/pallete';
import globalStyles from "../styles/global"




const EventCard = ({item:{imageUrl}}:any) => {
    console.log(imageUrl)

    return (
        <View>
            {imageUrl && <Image progressiveRenderingEnabled={true} source={{uri:imageUrl}}/>}
        </View>
    );
}

const styles = StyleSheet.create({
})



export default EventCard;