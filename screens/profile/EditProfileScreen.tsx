import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { InputWithLabel, LargeButton } from '../../components';
import { User } from '../../entities/User';
import { RootState } from '../../store';
import globalStyles from '../../styles/global';
import Palette from '../../styles/pallete';

export default function EditProfileScreen() {
    const user: User = useSelector((state: RootState) => state.user.loggedInUser);
    const [name, setName] = useState("")
    const [studyProgramme, setStudyProgramme] = useState("")


    return (
        <View style={globalStyles.mainScreenContainer}>
            <InputWithLabel label='WHAT IS YOUR NAME?' value={name} handleValueChange={setName} placeholder={"John Wick"} style={styles.input}/>
            <InputWithLabel label='STUDY PROGRAMME' value={studyProgramme} handleValueChange={setStudyProgramme} placeholder={"Business"} style={styles.input}/>
            <LargeButton text='Save Changes' disabled={name === "" || studyProgramme === ""} handleOnClick={() => console.log("clicked")} style={styles.button}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: Palette.bright,
        borderRadius: 5,
        marginTop: 24
    },
    button:{
        marginTop: 24 
    }
})