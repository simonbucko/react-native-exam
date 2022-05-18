import { StyleSheet } from "react-native";
import Palette from "./pallete";

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Palette.bright,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Teko_400Regular',
        color: Palette.primary,
    },
})

export default globalStyles;