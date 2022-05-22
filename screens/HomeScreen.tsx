import React, {useEffect} from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { Event } from '../entities/Event';
import { fetchEvents } from '../store/actions/events.actions';
import globalStyles from '../styles/global';
import Palette from '../styles/pallete';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import {EventCard} from "../components"

export default function HomeScreen() {
    const dispatch = useDispatch();
    const events: Event[] = useSelector((state: RootState) => state.events.events);

    useEffect(() => {
      dispatch(fetchEvents())    
    }, [])
    

    return (
        <View style={globalStyles.mainScreenContainer}>
            <FlatList
                data={events}
                renderItem={EventCard}
                style={styles.list}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    list:{
        width: "100%",
        paddingTop: 32
    }
})