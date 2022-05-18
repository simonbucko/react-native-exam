import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from "../../styles/global"
import { LargeButton } from '../../components';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from "../../typings/navigations";
import { useNavigation } from '@react-navigation/native';

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
            <Text>Events Screen</Text>
            <LargeButton text="Next" handleOnClick={handleClick}/>
        </View>
    );
}

const styles = StyleSheet.create({

})  