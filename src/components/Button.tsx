import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
    isLandScape?:boolean;
}

export default function Button({ title, onPress, isBlue, isGray,isLandScape }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity 
            // style={
            //     isBlue 
            //     ? Styles.btnBlue 
            //     : isGray 
            //     ? Styles.btnGray 
            //     : theme === "light" 
            //     ? Styles.btnLight 
            //     : Styles.btnDark
            // }
            style={
                isLandScape?
                isBlue 
                ? Styles.btnBlueLandScape
                : isGray 
                ? Styles.btnGrayLandScape 
                : theme === "light" 
                ? Styles.btnLightLandScape 
                : Styles.btnDarkLandScape
                :
                isBlue 
                ? Styles.btnBlue 
                : isGray 
                ? Styles.btnGray 
                : theme === "light" 
                ? Styles.btnLight 
                : Styles.btnDark
            }  
            onPress={onPress}>
            <Text 
               style={
                   isBlue || isGray 
                   ? Styles.smallTextLight
                   : theme === "dark" 
                   ? Styles.smallTextLight 
                   : Styles.smallTextDark 
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}