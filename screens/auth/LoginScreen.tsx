import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/user.actions';
import { StackParamList } from "../../typings/navigations";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import {RootState} from "../../store"
import globalStyles from "../../styles/global";
import Palette from '../../styles/pallete';
import { HorizontalDivider, InputWithLabel, LargeButton } from "../../components";


type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "LoginScreen"
>

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation<ScreenNavigationType>()
    const loginError = useSelector((state: RootState) => state.user.loginError)


    return (
        <View style={globalStyles.container}>
            <Image progressiveRenderingEnabled={true} style={styles.image} source={require("../../assets/pics/s_logo.png")}/>
            <Text style={{...globalStyles.text,...styles.title}}>Log in</Text>
            <View style={styles.inputsWrapper}>
                <InputWithLabel label='E-MAIL' value={email} placeholder='example@student.cbs.dk' handleValueChange={setEmail}/>
                <HorizontalDivider/>
                <InputWithLabel label='PASSWORD' value={password} placeholder='**********' handleValueChange={setPassword} isPassword/>
                {loginError && (
                    <View>
                        <HorizontalDivider/>
                        <View style={styles.errorWrapper}>
                            <Image progressiveRenderingEnabled={true} source={require("../../assets/pics/error.png")}/>
                            <Text style={styles.errorText}>{loginError}</Text>
                        </View>
                    </View>
                    
                )}
            </View>
            <LargeButton 
                text="Log in" 
                handleOnClick={() => dispatch(login(email, password))} 
                disabled={email === "" || password === ""}/>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("SignupScreen")}>
                <View style={styles.linkToLoginWrapper}>
                    <Text style={styles.linkToLogin}>Don't have an account? </Text>
                    <Text style={[styles.linkToLogin,styles.boldText]}>Sign up</Text>
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