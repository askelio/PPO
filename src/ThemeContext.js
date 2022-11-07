import React, { useState, createContext, useEffect } from "react";
import { Appearance } from 'react-native';


export const ThemeContext = createContext();

export const ThemeContextProvider = props => {
    const colorScheme = Appearance.getColorScheme();
    const [styles, setStyles] = useState({});
    const [colors, setColors] = useState({});
    const [isLoading, setLoading] = useState(true);

    const lightThemeColors = {
        bg: '#ffffff',
        buttonBg: '#f1f3f4',
        previewBg: 'transparent',
        equalsBg: '#4285f4',
        clearBg: '#eb6161',
        numberBg: '#f1f3f4',
        displayBg: '#ffffff',
        buttonTextColor: '#000000',
        numberButtonTextColor: '#000000',
        clearButtonTextColor: '#ffffff',
        equalsButtonTextColor: '#ffffff',
        previewTextColor: '#000000',
        expressionTextColor: '#000000',
        borderColor: '#f9f9f9',
        borderRadius: 35,
        spacing: 1,
        fontSize: 16,
        exprFontSize: 30,        
    }

    const darkThemeColors = {
        bg: '#21252d',
        buttonBg: '#292d36',
        previewBg: 'transparent',
        equalsBg: '#4285f4',
        clearBg: '#eb6161',
        numberBg: '#393e4a',
        displayBg: '#21252d',
        buttonTextColor: '#ffffff',
        numberButtonTextColor: '#ffffff',
        clearButtonTextColor: '#ffffff',
        equalsButtonTextColor: '#ffffff',
        previewTextColor: '#c3c9d5',
        expressionTextColor: '#ffffff',
        borderColor: '#21252d',
        borderRadius: 35,
        spacing: 1,
        fontSize: 16,
        exprFontSize: 30,        
    }

    useEffect(() => {
        if(Object.keys(colors).length === 0) return;
        if(styles !== {}) generateStyles();
    }, [colors])

    useEffect(() => {
        if(Object.keys(styles).length === 0) return;
        setValue({...value, styles: styles});
        //console.log("values updated");
        setLoading(false);
    }, [styles])

    useEffect(() => {
        //console.log("loading complete");
        setValue({...value, isLoading: isLoading});
    }, [isLoading])




    let init = false;
    const customizeTheme = ({theme, customize}) => {
        if(init) return;
        init = true;
        let themeType = theme || colorScheme;
        console.log(themeType)
        const _defaultColors = themeType === "ligth" ? lightThemeColors : darkThemeColors;
        let merged = {..._defaultColors, ...customize};
        setColors(merged);
    }


    const generateStyles = () => {
        const { bg, buttonBg, previewBg, equalsBg, clearBg,
             numberBg, displayBg, buttonTextColor, numberButtonTextColor, clearButtonTextColor,
              equalsButtonTextColor, previewTextColor, expressionTextColor, borderColor, borderRadius, 
              spacing, fontSize, exprFontSize } = colors;

        const btn = {
                  
            borderWidth: spacing,
            borderColor: borderColor,
            borderRadius: borderRadius,
            backgroundColor: buttonBg,
            color: buttonTextColor,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            fontSize: fontSize,
            fontWeight: "normal", 
            // height:50,
            width:30,            
                   
        }

        const _styles = {
            container: {
                backgroundColor: bg,
                
                flex: 1
            },
            tooltipContainer: {
                flex: 1, flexDirection: "row",
                background: buttonBg, 
                alignItems: "center"
            },
            tooltip: {
                color: buttonTextColor,
                flex: 8, 
                fontSize: fontSize * 0.8, 
                paddingLeft: 5, opacity: 0.5
            },
            row: {                          
                display: "flex",                
                flexDirection: "row",                
                flex: 1
            },
            switchRow:{
                display: "flex",                
                flexDirection: "row",                
                flex: 1,
                borderWidth:1,
                borderRadius:24,
                width:130,
                
                alignItems:"center",
                justifyContent:"center",
                marginLeft:"33%",
            },         
            button: btn,
            display: {
                backgroundColor: displayBg,
                padding: 5,
                flex: 1.5,
                flexShrink: 0,
                justifyContent: "center",
                minHeight: exprFontSize * 2.3,
                
            },
            expression: {
                flex: 1,
                backgroundColor: "transparent",
                color: expressionTextColor,
                display: "flex",
                textAlign: "right",
                alignItems: "flex-end",
                fontSize: exprFontSize,
                lineHeight: exprFontSize,
                fontWeight: "bold",
                //minHeight: exprFontSize * 2.2,
                marginTop: "auto"
            },
            result: {
                backgroundColor: previewBg,
                color: previewTextColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                lineHeight: exprFontSize * 0.5,
                fontSize: exprFontSize * 0.5,
                marginTop: 5
            },
            buttonEquals: {
                ...btn,
                backgroundColor: equalsBg,
                color: equalsButtonTextColor,
                fontWeight: "bold"
            },
            buttonClear: {
                ...btn,
                backgroundColor: clearBg,
                color: clearButtonTextColor
            },
            buttonNumber: {
                ...btn,
                backgroundColor: numberBg,
                color: numberButtonTextColor,
                
            },
            switchButton: {
                height:30,
                width:50,
                borderColor: '#21252d',
                borderRadius: 35,
                borderWidth:2,
                top:0
            }
        };

        
        setStyles(_styles);
    }

   

    // set theme
    // set colors
    // generate styles
    // set values

    const [value, setValue] = useState({
        styles: styles,
        colors: colors,
        customizeTheme: customizeTheme,
        isLoading: isLoading
    })

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
}