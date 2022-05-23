import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackParamList } from '../../typings/navigations';
import { logout } from '../../store/actions/user.actions';
import { useDispatch } from 'react-redux';
import globalStyles from '../../styles/global';
import Palette from '../../styles/pallete';

type ScreenNavigationType = NativeStackNavigationProp<StackParamList, "Profile">;

export default function ProfileScreen() {
    const navigation = useNavigation<ScreenNavigationType>();
    const dispatch = useDispatch();

    return (
        <View style={[globalStyles.mainScreenContainer,styles.container]}>
            <Button title="Edit profile" onPress={() => navigation.navigate("EditProfile")} />
            <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => dispatch(logout())}>
                <Text style={styles.buttonText}>LOG OUT</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    button:{
        width: "100%",
        backgroundColor: Palette.bright,
        paddingVertical: 20,
        marginBottom: 10,
        borderRadius: 5
    },
    buttonText: {
        width: "100%",
        textAlign: "center",
        fontSize: 26,
        fontFamily: 'Teko_500Medium',
        color: Palette.primary,
    }
})