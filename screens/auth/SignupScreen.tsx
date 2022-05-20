import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { rehydrateUser, signup } from '../../store/actions/user.actions';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from "../../typings/navigations";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {RootState} from "../../store"
import globalStyles from "../../styles/global"
import {InputWithLabel, LargeButton} from "../../components"

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "HistoryScreen"
>

export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');       
    const [confirmPassword, setConfirmPassword] = useState('');       
    const dispatch = useDispatch();
    const navigation = useNavigation<ScreenNavigationType>()
    const signupError = useSelector((state: RootState) => state.user.signupError)

    async function readPersistedUserInfo() {
        const token = await SecureStore.getItemAsync('idToken');
        const userJson = await SecureStore.getItemAsync('user');
        let user = null;
        if (userJson) {
            user = JSON.parse(userJson);
        }
        if (user) {
            dispatch(rehydrateUser(user, token!))
        }
    }

    useEffect(() => {
        readPersistedUserInfo();
    }, [])


    return (
        <View style={globalStyles.container}>
            <Image progressiveRenderingEnabled={true} style={styles.image} source={require("../../assets/pics/s_logo.png")}/>
            <Text style={{...globalStyles.text,...styles.title}}>Sign up to get access</Text>
            <InputWithLabel label='E-MAIL' value={email} placeholder='example@student.cbs.dk' handleValueChange={setEmail}/>
            <InputWithLabel label='PASSWORD' value={password} placeholder='**********' handleValueChange={setPassword} isPassword/>
            <InputWithLabel label='REPEAT PASSWORD' value={confirmPassword} placeholder='**********' handleValueChange={setConfirmPassword} isPassword/>
            {/* <Button title="Signup" onPress={() => dispatch(signup(email, password))} /> */}
            <LargeButton 
                text="Get access" 
                handleOnClick={() => dispatch(signup(email, password,confirmPassword))} 
                disabled={email === "" || password === "" || confirmPassword === ""}/>
            {signupError && (
                <Text>{signupError}</Text>
            )}
            {/* <Button title="Already have a user? Log in" onPress={() => navigation.navigate("LoginScreen")} /> */}
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("LoginScreen")}>
                <Text>Already have a user? <b>Log in</b></Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        marginBottom: 20
    },
    title:{
        textAlign: "left",
        width: "100%",
        fontSize: 26
    },
    linkToLogin:{
        fontSize: 12
    }
})