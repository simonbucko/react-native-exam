import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import globalStyles from "../../styles/global"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from "../../typings/navigations";
import { useNavigation } from '@react-navigation/native';
import Palette from '../../styles/pallete';
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import {onboardingFinished} from "../../store/actions/ui.actions"

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "InitialScreen"
>

export default function InitialScreen() {
    const navigation = useNavigation<ScreenNavigationType>()
    const dispatch = useDispatch();

    const checkIsOnboardingFinished = async () => {
        const isOnboardingFinished = await SecureStore.getItemAsync("isOnboardingFinished")
        if (isOnboardingFinished === 'true'){
            dispatch(onboardingFinished())
        }
    }

    React.useEffect(() => {
        checkIsOnboardingFinished()
    },[])

    return (
        <TouchableOpacity activeOpacity={1} style={{...globalStyles.container,...styles.container}} onPress={() => navigation.navigate("EventsScreen")}>
            <Text style={{...globalStyles.text,...styles.title}}>Student Life {"\n"} at {"\n"}Copenhagen Business School</Text>
            <Text style={{...globalStyles.text,...styles.subtitle}}>BY</Text>
            <Image style={styles.image} source={require("../../assets/pics/studentsLogo.png")}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end",
    },
    title: {
        fontSize: 32,
        textAlign: "center",
        marginBottom: 95
    },
    subtitle: {
        fontSize: 26,
        textAlign: "center",
        color: Palette.gray
    },
    image:{
        marginBottom: 84
    }
})  