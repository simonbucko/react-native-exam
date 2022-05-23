import React, {useEffect} from 'react';
import { Button, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { Event } from '../entities/Event';
import { fetchEvents } from '../store/actions/events.actions';
import { fetchBlogs } from '../store/actions/blogs.actions';
import globalStyles from '../styles/global';
import Palette from '../styles/pallete';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import {EventCard, BlogCard} from "../components"
import { Blog } from '../entities/Blog';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const events: Event[] = useSelector((state: RootState) => state.events.events);
    const blogs: Blog[] = useSelector((state: RootState) => state.blogs.blogs);


    useEffect(() => {
      dispatch(fetchEvents())    
      dispatch(fetchBlogs())    
    }, [])
    

    return (
        <View style={globalStyles.mainScreenContainer}>
                <ScrollView style={styles.scrollable}>
                    {events.map((item,key) => (
                        <EventCard item={item} key={key}/>
                    ))}
                    {blogs.map((item,key) => (
                        <BlogCard item={item} key={key}/>
                    ))}
                </ScrollView>
            

            {/* <FlatList
                data={events}
                renderItem={EventCard}
                style={styles.list}
            />
            <FlatList
                data={blogs}
                renderItem={BlogCard}
                style={styles.list}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    list:{
        width: "100%",
        paddingTop: 32
    },
    scrollable:{
        width: "100%",
        height: "100%",
        marginTop: 32

    }
})