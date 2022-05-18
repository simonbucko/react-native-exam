import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Palette from '../styles/pallete';
import globalStyles from "../styles/global"

interface ILargeButton {
    text:string,
    handleOnClick:Function
}


const LargeButton = ({ text,handleOnClick }:ILargeButton) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => handleOnClick()}>
            <Text style={{...globalStyles.text,...styles.textStyle}}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: Palette.primary,
        width: "100%",
        padding: 20,
        borderRadius: 5
    },
    textStyle:{
        color: Palette.bright,
        fontSize: 16,
    }
})

export default LargeButton;