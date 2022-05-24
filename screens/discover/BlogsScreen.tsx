import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BlogCard } from "../../components";
import { Blog } from '../../entities/Blog';
import { RootState } from '../../store';
import { fetchBlogs } from '../../store/actions/blogs.actions';
import globalStyles from '../../styles/global';

export default function BlogsScreen() {
    const dispatch = useDispatch();
    const blogs: Blog[] = useSelector((state: RootState) => state.blogs.blogs);


    useEffect(() => {
      dispatch(fetchBlogs())    
    }, [])
    

    return (
        <View style={globalStyles.mainScreenContainer}>
             <FlatList
                data={blogs}
                renderItem={BlogCard}
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