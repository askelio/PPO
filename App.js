import React, { useState, Text } from 'react';
import { TouchableOpacity } from 'react-native';
import Calculator from "./src/Calculator";
import { ThemeContextProvider } from './src/ThemeContext';
import { View } from 'react-native';
import { Switch } from 'react-native';


export default ({showLiveResult, scientific, customize, theme, haptics, history, showTooltip}) => {
    const [isScientific,setIsScientific] = useState('false')
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {setIsEnabled(previousState => !previousState)};

    // <View>


    // {/* <View>
    //     <Text>
    //         Hello
    //     </Text>
    //     <Switch
    //     trackColor={{ false: "#767577", true: "#81b0ff" }}
    //     thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
    //     ios_backgroundColor="#3e3e3e"
    //     onValueChange={toggleSwitch}
    //     value={isEnabled}
        
    //     />
    // </View>
        
    // {/* <View>
    //     <Text>
    //         Hello
    //     </Text>
    //     <Switch
    //     trackColor={{ false: "#767577", true: "#81b0ff" }}
    //     thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
    //     ios_backgroundColor="#3e3e3e"
    //     onValueChange={toggleSwitch}
    //     value={isEnabled}
        
    //     />
    // </View> */}
    // </View> */}
    
    return (
        <ThemeContextProvider> 
       

            <Calculator showLiveResult={false} scientific={isScientific} customize={customize} theme='ligth' haptics={haptics} history={history} showTooltip={showTooltip}/>
        </ThemeContextProvider>        
    );
}