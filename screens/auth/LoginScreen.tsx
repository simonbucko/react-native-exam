import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/user.actions';
import { StackParamList } from "../../typings/navigations";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import {RootState} from "../../store"

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
        <View style={styles.container}>
            <Text style={{fontFamily: 'Teko_400Regular'}}>Login Screen</Text>
            <TextInput value={email} placeholder="email" onChangeText={setEmail} />
            <TextInput value={password} placeholder="password" onChangeText={setPassword} />
            <Button title="Login" onPress={() => dispatch(login(email, password))} />
            {loginError && (
                <Text>{loginError}</Text>
            )}
            <Button title="Go to sign up page" onPress={() => navigation.navigate("SignupScreen")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})