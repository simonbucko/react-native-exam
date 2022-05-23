import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Palette from '../styles/pallete';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import HorizontalDivider from './HorizontalDivider';

const BlogCard = ({item}:any) => {

    return (
        <View style={styles.card}>
            <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Ionicons name="newspaper" size={10} color={Palette.primary} />
                <Text style={styles.blog}>
                    BLOG
                </Text>
            </View>
            <Text style={styles.title}>
                {item.title}
            </Text>
            <Text style={styles.text}>
                {item.text}
            </Text>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                <Text style={styles.published}>{item.published}</Text>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center", marginRight: 20}}>
                        <Foundation name="like" size={15} color={Palette.primary} />
                        <Text style={styles.count}>{item.likeCount}</Text>
                    </View>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <MaterialIcons name="insert-comment" size={15} color={Palette.primary} />
                        <Text style={styles.count}>{item.commentCount}</Text>
                    </View>
                </View>
            </View>
            <HorizontalDivider/>
            <Text style={styles.publisher}>{item.publisher}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        width: "100%",
        marginBottom: 20,
        borderRadius: 5,
        overflow: "hidden",
        paddingHorizontal: 18,
        paddingVertical:14,
        backgroundColor: Palette.bright
    },
    blog:{
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 9,
        color: Palette.primary
    },
    title:{
        fontSize: 26,
        fontFamily: 'Teko_500Medium'
    },
    text: {
        fontSize: 14,
        marginBottom: 12
    },
    published: {
        fontSize: 12,
        color: Palette.gray
    },
    count: {
        color: Palette.primary,
        fontWeight: "bold",
        fontSize: 12,
        marginLeft: 5
    },
    publisher: {
        fontSize: 16,
        fontFamily: 'Teko_500Medium',
        marginTop: 10
    }
})



export default BlogCard;