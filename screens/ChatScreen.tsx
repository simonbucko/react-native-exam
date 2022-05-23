import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import globalStyles from '../styles/global';
import Palette from '../styles/pallete';

export default function ChatScreen() {

    return (
        <View style={[globalStyles.mainScreenContainer, styles.container]}>
            <Image progressiveRenderingEnabled={true} source={require("../assets/pics/nochats.png")}/>    
            <Text style={styles.title}>No Chats</Text>
            <Text style={styles.subtitle}>You can start a new chat by reaching{"\n"} out to a student organisation.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center"
    },
    title:{
        fontSize: 26,
        fontFamily: 'Teko_500Medium',
        marginTop: 30
    },
    subtitle:{
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 14,
        color: Palette.light_gray,
        textTransform: "uppercase",
        textAlign: "center"
    }
})