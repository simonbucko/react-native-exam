import React from 'react';
import { StyleSheet, View } from 'react-native';
import Palette from '../styles/pallete';

const HorizontalDivider = () => {
    return (
        <View style={styles.divider}>
        </View>
    );
}

const styles = StyleSheet.create({
    divider:{
        borderTopWidth: 1,
        borderColor: Palette.light_gray
    },
})

export default HorizontalDivider;