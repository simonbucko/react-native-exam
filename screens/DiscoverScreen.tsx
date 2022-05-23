import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { Event } from '../entities/Event';
import { fetchEvents } from '../store/actions/events.actions';
import globalStyles from '../styles/global';
import Palette from '../styles/pallete';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import {EventCard} from "../components"
import { FontAwesome } from '@expo/vector-icons';

export default function DiscoverScreen() {
    const [value, setValue] = useState("")

    return (
        <View style={globalStyles.mainScreenContainer}>
            <View style={styles.searchWrapper}>
                <FontAwesome name="search" size={24} color={Palette.dark} />
                <TextInput style={styles.input} value={value} placeholder={"Search for events, posts and more"} onChangeText={(input) => setValue(input)} placeholderTextColor={Palette.light_gray}/>
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
    }
})