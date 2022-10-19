import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet,Image } from "react-native";


interface ButtonProps {
    onPress: () => void;
    isLandScape?:boolean;    
}

export default function ExcButton({onPress,isLandScape}: ButtonProps) {    
    return (
        <TouchableOpacity style={isLandScape?styles.exchange_button_landscape:styles.exchange_button}
            
            onPress={onPress}>                  
            <Image style={isLandScape?styles.exc_image_style_landscape:styles.exc_image_style} source={require('../../../src/assets/images/swap_image.png')}/>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({    
    exchange_button:{      
        width: 72,
        height: 72,
        
        borderRadius: 24,
        backgroundColor:'#4E505F',
        justifyContent: "center",
        alignItems: "center",
        
        margin: 8,         
    },    
    exc_image_style:{
        width: 60,
        height: 60,
        resizeMode: 'contain',
        maxWidth: '100%',       
    },
    exchange_button_landscape:{      
        width: 52,
        height: 52,
        
        borderRadius: 24,
        backgroundColor:'#4E505F',
        justifyContent: "center",
        alignItems: "center",
        
        margin: 8,         
    },    
    exc_image_style_landscape:{
        width: 50,
        height: 50,
        resizeMode: 'contain',
        maxWidth: '100%',          
           
        
    },

  });