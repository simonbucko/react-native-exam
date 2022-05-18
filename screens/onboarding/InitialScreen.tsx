import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import globalStyles from "../../styles/global"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from "../../typings/navigations";
import { useNavigation } from '@react-navigation/native';

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "InitialScreen"
>

export default function InitialScreen() {
    const navigation = useNavigation<ScreenNavigationType>()

    return (
        <TouchableOpacity style={globalStyles.container} onPress={() => navigation.navigate("EventsScreen")}>
            <Text>Initial Screen</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

})  