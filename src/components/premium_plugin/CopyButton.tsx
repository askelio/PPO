import { useContext,useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet,Image } from "react-native";
import Clipboard from '@react-native-clipboard/clipboard';




interface ButtonProps {
    onPress: () => void;
}

export default function CpyButton({onPress}: ButtonProps) {     

    return (
        <TouchableOpacity style={styles.exchange_button} onPress={onPress}>            
                  
            <Image style={styles.exc_image_style} source={require('../../../src/assets/images/copy_image.png')}/>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({    
    exchange_button:{      
        width: 32,
        height: 72,        
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        marginLeft:"80%",
        position:"absolute",
        margin: 8,         
    },    
    exc_image_style:{
        width: 60,
        height: 60,
        resizeMode: 'contain',
        maxWidth: '100%',          
           
        
    },

  });