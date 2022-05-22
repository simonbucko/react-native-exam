import React, {useEffect} from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { Event } from '../entities/Event';
import { fetchEvents } from '../store/actions/events.actions';
import globalStyles from '../styles/global';
import Palette from '../styles/pallete';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const renderChatroom = ({ item }: { item: any }) => (
    <Text>{item.name}</Text>
);


export default function HomeScreen() {
    const dispatch = useDispatch();
    const events: Event[] = useSelector((state: RootState) => state.events.events);
    console.log(events)

    useEffect(() => {
      dispatch(fetchEvents())    
    }, [])
    

    return (
        <View style={globalStyles.mainScreenContainer}>
            <FlatList
                data={events}
                renderItem={renderChatroom}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
})