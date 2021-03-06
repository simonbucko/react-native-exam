import { StyleSheet } from "react-native";
import Palette from "./pallete";

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Palette.bright,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    mainScreenContainer:{
        flex: 1,
        backgroundColor: Palette.background_gray,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20
    },
    text: {
        fontFamily: 'Teko_400Regular',
        color: Palette.text_primary,
    },
})

export default globalStyles;