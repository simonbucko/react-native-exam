import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Palette from '../styles/pallete';
import globalStyles from "../styles/global"

interface IInputWithLabel {
    label:string,
    value:string,
    placeholder:string,
    isPassword?:boolean,
    handleValueChange: Function
}


const InputWithLabel = ({ label,value,handleValueChange, placeholder, isPassword = false }:IInputWithLabel) => {
    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <TextInput style={styles.input} value={value} placeholder={placeholder} onChangeText={(input) => handleValueChange(input)} secureTextEntry={isPassword} placeholderTextColor={Palette.light_gray}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        paddingHorizontal: 10
    },
    input: {
        fontSize: 16,
        paddingVertical: 10,
    }
})

export default InputWithLabel;