import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HorizontalDivider, InputWithLabel, LargeButton } from "../../components";
import { RootState } from "../../store";
import { rehydrateUser, signup } from '../../store/actions/user.actions';
import globalStyles from "../../styles/global";
import Palette from '../../styles/pallete';
import { StackParamList } from "../../typings/navigations";

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
            <View style={styles.inputsWrapper}>
                <InputWithLabel label='E-MAIL' value={email} placeholder='example@student.cbs.dk' handleValueChange={setEmail}/>
                <HorizontalDivider/>
                <InputWithLabel label='PASSWORD' value={password} placeholder='**********' handleValueChange={setPassword} isPassword/>
                <HorizontalDivider/>
                <InputWithLabel label='REPEAT PASSWORD' value={confirmPassword} placeholder='**********' handleValueChange={setConfirmPassword} isPassword/>
                {signupError && (
                    <View>
                        <HorizontalDivider/>
                        <View style={styles.errorWrapper}>
                            <Image progressiveRenderingEnabled={true} source={require("../../assets/pics/error.png")}/>
                            <Text style={styles.errorText}>{signupError}</Text>
                        </View>
                    </View>
                    
                )}
            </View>
            <LargeButton 
                text="Get access" 
                handleOnClick={() => dispatch(signup(email, password,confirmPassword))} 
                disabled={email === "" || password === "" || confirmPassword === ""}/>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("LoginScreen")}>
                <View style={styles.linkToLoginWrapper}>
                    <Text style={styles.linkToLogin}>Already have a user? </Text>
                    <Text style={[styles.linkToLogin,styles.boldText]}>Log in</Text>
                </View>
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
    inputsWrapper:{
        width: "100%",
        borderWidth: 1,
        borderColor: Palette.light_gray,
        borderRadius: 5,
        marginBottom: 30,
        marginTop: 22
    },
    linkToLoginWrapper:{
        display: "flex",
        flexDirection: 'row',
        marginTop: 36
    },
    linkToLogin:{
        fontSize: 12,
        color: Palette.primary,
    },
    boldText:{
        fontWeight: 'bold'
    },
    errorWrapper:{
        display: 'flex',
        flexDirection: "row",
        paddingVertical: 16,
        width: "100%",
        justifyContent: "center"
    },
    errorText:{
        color: Palette.error,
        marginLeft: 13
    }
})