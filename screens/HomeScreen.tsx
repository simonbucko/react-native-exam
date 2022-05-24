import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BlogCard, EventCard } from "../components";
import { Blog } from '../entities/Blog';
import { Event } from '../entities/Event';
import { RootState } from '../store';
import { fetchBlogs } from '../store/actions/blogs.actions';
import { fetchEvents } from '../store/actions/events.actions';
import globalStyles from '../styles/global';

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
        </View>
    );
}

const styles = StyleSheet.create({
    scrollable:{
        width: "100%",
        height: "100%",
        marginTop: 32

    }
})