import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet,Image } from "react-native";


interface ButtonProps {
    onPress: () => void;    
}

export default function ExcButton({onPress}: ButtonProps) {
    
    return (
        <TouchableOpacity style={styles.exchange_button}
            
            onPress={onPress}> 
                  
            <Image style={styles.exc_image_style} source={require('../../../src/assets/images/swap_image.png')}/>
            
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

  });