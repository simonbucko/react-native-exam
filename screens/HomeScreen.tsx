import React, {useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/user.actions';
import globalStyles from '../styles/global';
import Palette from '../styles/pallete';

export default function HomeScreen() {
    const dispatch = useDispatch();

    useEffect(() => {
      
    
    }, [])
    

    return (
        <View style={globalStyles.mainScreenContainer}>
            <Text style={{fontFamily: 'Teko_400Regular'}}>FEED</Text>

            <Button title="Logout" onPress={() => dispatch(logout())} />
        </View>
    );
}

const styles = StyleSheet.create({
})