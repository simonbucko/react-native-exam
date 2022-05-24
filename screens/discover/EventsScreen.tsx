import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { EventCard } from "../../components";
import { Event } from '../../entities/Event';
import { RootState } from '../../store';
import { fetchEvents } from '../../store/actions/events.actions';
import globalStyles from '../../styles/global';

export default function EventsScreen() {
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