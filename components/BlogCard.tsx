import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Palette from '../styles/pallete';

const BlogCard = ({item}:any) => {

    return (
        <View style={styles.card}>
            <View style={styles.content}>
                <Text>
                    {item.title}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        width: "100%",
        height: 180,
        position: "relative",
        marginBottom: 20,
        borderRadius: 5,
        overflow: "hidden"
    },
    content: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 12,
        paddingBottom: 14
    },
    eventName: {
        color: Palette.bright,
        fontSize: 26,
        fontFamily: 'Teko_500Medium'
    },
    eventOrganizator: {
        color: Palette.bright,
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 4
    },
    wrapper:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    time: {
        color: Palette.bright,
        marginLeft: 12,
        fontWeight: "bold"
    },
    location: {
        color: Palette.bright,
        marginLeft: 12,
    }
})



export default BlogCard;