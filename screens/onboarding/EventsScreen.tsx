import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import globalStyles from "../../styles/global"
import { LargeButton } from '../../components';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from "../../typings/navigations";
import { useNavigation } from '@react-navigation/native';
import Palette from '../../styles/pallete';

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "InitialScreen"
>

export default function EventsScreen() {
    const navigation = useNavigation<ScreenNavigationType>()

    const handleClick = () => {
        console.log("hey")
        navigation.navigate("ChatScreen")
    }

    return (
        <View style={globalStyles.container}>
            <Image progressiveRenderingEnabled={true} style={styles.image} source={require("../../assets/pics/events.png")}/>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</Text>
            <View style={styles.dotsContainer}>
                <View style={{...styles.dot,...styles.activeDot}}></View>
                <View style={{...styles.dot}}></View>
                <View style={{...styles.dot}}></View>
            </View>
            <LargeButton text="Next" handleOnClick={handleClick}/>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        marginBottom: 40
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        color: Palette.gray,
        marginBottom: 24
    },
    dotsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 24

    },
    dot:{
        height:8,
        width:8,
        backgroundColor: Palette.light_gray,
        borderRadius: 50,
        marginRight: 8
    },
    activeDot: {
        backgroundColor: Palette.primary
    }
})  