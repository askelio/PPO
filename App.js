import React, { useState, Text } from 'react';
import { TouchableOpacity } from 'react-native';
import Calculator from "./src/Calculator";
import { ThemeContextProvider } from './src/ThemeContext';
import { View } from 'react-native';
import { Switch } from 'react-native';


export default ({showLiveResult, scientific, customize, theme, haptics, history, showTooltip}) => {    
        
    
    return (
            
        <ThemeContextProvider>
            <Calculator showLiveResult={false} scientific={false} customize={customize} theme={theme} haptics={haptics} history={history} showTooltip={showTooltip}/>
        </ThemeContextProvider>       
              
    );
}