import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from "../../styles/global"
import { LargeButton } from '../../components';

export default function EventsScreen() {
    return (
        <View style={globalStyles.container}>
            <Text>Events Screen</Text>
            <LargeButton text="Next"/>
        </View>
    );
}

const styles = StyleSheet.create({

})  