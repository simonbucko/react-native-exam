import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import globalStyles from '../../styles/global';
import Palette from '../../styles/pallete';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from "../../typings/navigations";
import { useNavigation } from '@react-navigation/native';

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "DiscoverScreen"
>

export default function DiscoverScreen() {
    const [value, setValue] = useState("")
    const navigation = useNavigation<ScreenNavigationType>()

    return (
        <View style={globalStyles.mainScreenContainer}>
            <View style={styles.searchWrapper}>
                <FontAwesome name="search" size={24} color={Palette.dark} />
                <TextInput style={styles.input} value={value} placeholder={"Search for events, posts and more"} onChangeText={(input) => setValue(input)} placeholderTextColor={Palette.light_gray}/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("EventsScreen")} style={styles.card}>
                <Image progressiveRenderingEnabled={true} style={styles.image} source={require("../../assets/pics/eventsBg.jpg")}/>
                <View style={styles.eventsOverlay}></View>
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>ALL EVENTS</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.card}>
                <Image progressiveRenderingEnabled={true} style={styles.image} source={require("../../assets/pics/organizationBg.jpg")}/>
                <View style={styles.organizationOverlay}></View>
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>ALL STUDENT ORGANIZATION</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image progressiveRenderingEnabled={true} style={styles.image} source={require("../../assets/pics/newspaperBg.jpg")}/>
                <View style={styles.newsOverlay}></View>
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>ALL POST</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchWrapper:{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: Palette.bright,
        marginTop: 24,
        padding: 16,
        borderRadius: 5
    },
    input:{
        fontSize: 12,
        marginLeft: 16
    },
    card:{
        width: "100%",
        height: 120,
        position: "relative",
        marginTop: 30,
        borderRadius: 5,
        overflow: "hidden"
    },
    image:{
        width: "100%",
        height: "100%",
    },
    eventsOverlay:{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: "rgb(112, 15, 110)",
        opacity: 0.8
    },
    organizationOverlay:{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: Palette.primary,
        opacity: 0.8
    },
    newsOverlay:{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: Palette.success,
        opacity: 0.8
    },
    textWrapper: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        color: Palette.bright,
        fontSize: 26,
        fontFamily: 'Teko_500Medium'
    }
})