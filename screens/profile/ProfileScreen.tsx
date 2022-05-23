import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
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
            <View style={styles.topSection}>
                <View style={styles.profileSectionWrapper}>
                    <Image style={styles.image} progressiveRenderingEnabled={true} source={require("../../assets/pics/anonymProfile.jpg")}/>
                    <View style={styles.profileInfoWrapper}>
                        <Text style={styles.name}>Simon Bucko</Text>
                        <Text style={styles.email}>eamil</Text>
                        <Text style={styles.program}>Keas tusok</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={1} style={styles.editButton} onPress={() => navigation.navigate("EditProfile")}>
                    <Text style={styles.editButtonText}>Edit profile</Text>
                </TouchableOpacity>
            </View>
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
    topSection: {
        width: "100%",
        marginTop: 30
    },
    profileSectionWrapper:{
        display: 'flex',
        flexDirection: 'row'
    },
    profileInfoWrapper:{
        marginLeft: 20
    },
    name:{
        color: Palette.primary,
        fontSize: 26,
        fontFamily: 'Teko_500Medium'
    },
    email:{
        fontSize: 12
    },
    program:{
        fontSize: 12
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 500
    },
    editButton:{
        width: "100%",
        backgroundColor: Palette.primary,
        paddingVertical: 8,
        marginTop: 16,
        borderRadius: 5
    },
    editButtonText: {
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        color: Palette.bright,
        fontWeight: "bold"
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