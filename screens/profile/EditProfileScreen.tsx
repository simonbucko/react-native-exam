import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { InputWithLabel, LargeButton } from '../../components';
import { User } from '../../entities/User';
import { RootState } from '../../store';
import { updateUserProfile } from '../../store/actions/user.actions';
import globalStyles from '../../styles/global';
import Palette from '../../styles/pallete';


export default function EditProfileScreen() {
    const displayName: string = useSelector((state: RootState) => state.user.loggedInUser.displayName);
    const studyProgram: string = useSelector((state: RootState) => state.user.loggedInUser.studyProgram);
    const [name, setName] = useState(displayName)
    const [studyProgramme, setStudyProgramme] = useState(studyProgram)
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(updateUserProfile(name,studyProgramme))
    }

    return (
        <View style={globalStyles.mainScreenContainer}>
            <InputWithLabel label='WHAT IS YOUR NAME?' value={name} handleValueChange={setName} placeholder={"John Wick"} style={styles.input}/>
            <InputWithLabel label='STUDY PROGRAMME' value={studyProgramme} handleValueChange={setStudyProgramme} placeholder={"Business"} style={styles.input}/>
            <LargeButton text='Save Changes' disabled={name === "" || studyProgramme === ""} handleOnClick={handleSave} style={styles.button}/>
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