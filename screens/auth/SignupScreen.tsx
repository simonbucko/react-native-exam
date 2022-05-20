import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { rehydrateUser, signup } from '../../store/actions/user.actions';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from "../../typings/navigations";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {RootState} from "../../store"

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "HistoryScreen"
>

export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        <View style={styles.container}>
            <Text style={{fontFamily: 'Teko_400Regular'}}>Signup Screen</Text>
            <TextInput value={email} placeholder="email" onChangeText={setEmail} />
            <TextInput value={password} placeholder="password" onChangeText={setPassword} />
            <Button title="Signup" onPress={() => dispatch(signup(email, password))} />
            {signupError && (
                <Text>{signupError}</Text>
            )}
            <Button title="Go to login up page" onPress={() => navigation.navigate("LoginScreen")} />
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