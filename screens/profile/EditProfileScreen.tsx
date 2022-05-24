import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { InputWithLabel, LargeButton } from '../../components';
import { User } from '../../entities/User';
import { RootState } from '../../store';
import { updateUserProfile } from '../../store/actions/user.actions';
import globalStyles from '../../styles/global';
import Palette from '../../styles/pallete';
import { Snackbar } from 'react-native-paper';
import {Keyboard} from 'react-native'


export default function EditProfileScreen() {
    const displayName: string = useSelector((state: RootState) => state.user.loggedInUser.displayName);
    const studyProgram: string = useSelector((state: RootState) => state.user.loggedInUser.studyProgram);
    const [name, setName] = useState(displayName)
    const [studyProgramme, setStudyProgramme] = useState(studyProgram)
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);
    const handleSave = () => {
        Keyboard.dismiss()
        dispatch(updateUserProfile(name,studyProgramme))
        onToggleSnackBar()
    }

    return (
        <View style={globalStyles.mainScreenContainer}>
            <InputWithLabel label='WHAT IS YOUR NAME?' value={name} handleValueChange={setName} placeholder={"John Wick"} style={styles.input}/>
            <InputWithLabel label='STUDY PROGRAMME' value={studyProgramme} handleValueChange={setStudyProgramme} placeholder={"Business"} style={styles.input}/>
            <LargeButton text='Save Changes' disabled={name === "" || studyProgramme === ""} handleOnClick={handleSave} style={styles.button}/>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'Ok',
                    labelStyle: {color: Palette.bright}
                }}
                style={styles.snackBar}
                >
                Your profile has been saved.
            </Snackbar>
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
    },
    snackBar: {
        backgroundColor: Palette.success
    }
})