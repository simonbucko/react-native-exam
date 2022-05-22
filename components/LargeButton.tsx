import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Palette from '../styles/pallete';
import globalStyles from "../styles/global"

interface ILargeButton {
    text:string,
    handleOnClick:Function,
    disabled?:boolean
}


const LargeButton = ({ text,handleOnClick,disabled }:ILargeButton) => {
    const styles = StyleSheet.create({
        button:{
            backgroundColor: Palette.primary,
            width: "100%",
            padding: 20,
            borderRadius: 5,
            opacity: disabled ? 0.5 : 1
        },
        text:{
            color: Palette.bright,
            fontSize: 16,
        }
    })

    return (
        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => handleOnClick()} disabled={disabled}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}



export default LargeButton;