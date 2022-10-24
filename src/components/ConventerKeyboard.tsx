import * as React from "react";
import Button from "./Button";
import ExcButton from "./premium_plugin/SwitchButton";
import CpyButton from "./premium_plugin/CopyButton";
import InsButton from "./premium_plugin/InsertButton";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";
import { useState } from "react";
import { StyleSheet,Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { getCurrencyRates } from "./CurrencyExchangeRates";
import * as Clipboard from 'expo-clipboard';



let temp_to_copy = "";
const ACCYRANCY = 16

let converterData = {
  'lehgth':[
    { label: 'Meter (m)', value: 1 },
    { label: 'Yard (yd)', value: 1.0936133 },
    { label: 'Foot (ft)', value: 3.2808399 },
    { label: 'Mile (mi)', value: 0.0006214 },
    { label: 'Inch (in)', value: 39.3700787 },
  ],
  'speed':[
    { label: 'Meter/second (m/s)', value: 1 },
    { label: 'Kilometer/hour (km/h)', value: 3.6},
    { label: 'Mile/hour (mph)', value: 2.236936 },
    { label: 'Mach (Ma)', value: 0.0029386 },
    { label: 'Inch/second (in)', value: 39.3700787},
  ],
  'currency':[
    { label: 'EUR', value: 1 },
  ]
}

const screen = Dimensions.get('screen');

let a = 0
export const MyConverterKeyboard = ({converterType}:{converterType:string}) => { 
   
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [selectedUnit_2, setSelectedUnit_2] = useState(0);
  const [selectedUnit_1,setSelectedUnit_1] = useState(0);

  // For cursor position

  const [inputCursor, setInputCursor] = useState(firstNumber.length+1);
  // For screen rotating
  
  const isLandscape = screen.width > screen.height;  
  const [window, setWindow] = useState(false);

  React.useEffect(() => {
    const b = Dimensions.addEventListener('change',()=>{
      setWindow(!window);
      console.log(a++)
    })
    return () => {
      b.remove()
    };
  });

  

  var data = converterData.lehgth;

  

  switch(converterType){
    case 'length':data =converterData.lehgth;
    break;
    case 'currency': 
    data =converterData.currency;
    if(data.length <=1){
    getCurrencyRates(data);    
    }
    break;
    case 'speed':data = converterData.speed
    break;
  }

  const handleNumberPress = (buttonValue: string) => {
    if(firstNumber.includes('.') && buttonValue=='.'){
      alert("You cant enter more than one dots")
      return
    }
    if(firstNumber=='' && buttonValue=='.'){
      alert("You cant enter '.' as the first symbol of number")
      return
    }
    if(firstNumber.length==ACCYRANCY-1 && buttonValue=='.'){
      alert("You cant enter '.' in the end of number")
      return
    }
    
    if (firstNumber.length < ACCYRANCY) {
      // if(inputCursor==0 && firstNumber.length!=0){
      //   return
      // }
      setInputCursor(inputCursor+1)
      setFirstNumber(firstNumber.slice(0,inputCursor)+buttonValue+firstNumber.slice(inputCursor))
      // setFirstNumber(firstNumber + buttonValue);      
      getResult()  
    }
  }; 

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");    
  };


  const getResult = () =>{
    if(selectedUnit_1 === 0 && selectedUnit_2 === 0){
      setSelectedUnit_1(1);
      setSelectedUnit_2(1);     
      
    }    
    if (firstNumber == "") {     
      
      return(<Text>{(0 * selectedUnit_2/selectedUnit_1).toString()}</Text>)
    }
    else{
      temp_to_copy = (parseFloat(firstNumber) * selectedUnit_2/selectedUnit_1).toFixed(ACCYRANCY).toString().slice(0,ACCYRANCY)
      return(<Text>{(parseFloat(firstNumber) * selectedUnit_2/selectedUnit_1).toFixed(ACCYRANCY).toString().slice(0,ACCYRANCY)}</Text>)
    }  
      
       
  }  

  const displayResult = () =>{    
    return getResult()
  }

  const firstNumberDisplay = () => {   
    
    if (firstNumber === "") {          
      return "0";       
    }
    else{      
      return firstNumber;
    }        
  }; 

   

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(temp_to_copy);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    
    if(!parseFloat(text)){
      alert('Incorrect digit format')
      return
    }

    if(text.length<=ACCYRANCY){      
      setFirstNumber(text)
    }
    else{
      alert("Number is too large to insert")
    }
    
  };

  const swapSelectedUnits = () =>{
    let tmp = selectedUnit_2
    setSelectedUnit_2(selectedUnit_1)
    setSelectedUnit_1(tmp)
  }

  

  const deleteNumber = ():any =>{
    if(inputCursor<=0){
      return
    }
    setInputCursor(inputCursor-1)
    setFirstNumber(firstNumber.slice(0,inputCursor-1)+firstNumber.slice(inputCursor))
  } 

  console.log(inputCursor)

  const [editState,setEditState] = useState(true)
  const [caretState,setCaretState] = useState(false)
      
  const detectOnPressIn = () =>{
    setEditState(false)    
    setCaretState(true)
    setTimeout(()=>{setCaretState(false);setEditState(true),5000000}) 
  }

    

  return (
    
    // Selectors for exchange unit
    
    <View style={Styles.viewBottom}>     
      <View style={window?styles.selector_landscape:styles.non_landscape}>
        <View style={Styles.row}>
          <View style={styles.first_picker}>
            <Text style={styles.container}>First</Text>
            <Picker
                selectedValue={selectedUnit_1}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedUnit_1(itemValue)
                }>
                {
                  data.map(function(i){
                    return <Picker.Item label={i.label} value={i.value}/>
                  })
                }
                
            </Picker>       
          </View>
          {/* <Text>{firstNumberDisplay()}</Text> */}
          
            <View  removeClippedSubviews={true}>
              <TextInput onPressIn={detectOnPressIn} editable={editState} contextMenuHidden={true} selectTextOnFocus={false}  showSoftInputOnFocus={false} onSelectionChange={(e) => {e.nativeEvent.selection.end = e.nativeEvent.selection.start; setInputCursor(e.nativeEvent.selection.start)}}>
              <Text>
                {firstNumber}
              </Text>
              </TextInput>
            </View>         
                             

          <InsButton onPress={fetchCopiedText}/>        
        </View>     

        <View style={Styles.row}>
          <View style={styles.first_picker}>
            <Text style={styles.container}>Second</Text>
            <Picker
                selectedValue={selectedUnit_2}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedUnit_2(itemValue)
                }>
                {
                  data.map(function(i){
                    return <Picker.Item label={i.label} value={i.value}/>
                  })
                }
            </Picker>       
          </View>
                  
          <Text>{displayResult()}</Text>
          <CpyButton onPress={copyToClipboard}/>         

        </View>
      </View>
      
      

      {/*
      Custom keyboard 
      */}
      <View style={window?styles.landscape:styles.non_landscape}>
      <View style={Styles.row}>
        <Button title="7" isLandScape={window?true:false} onPress={() => handleNumberPress("7")} />
        <Button title="8" isLandScape={window?true:false} onPress={() => handleNumberPress("8")} />
        <Button title="9" isLandScape={window?true:false} onPress={() => handleNumberPress("9")} />
        <Button title="C" isLandScape={window?true:false} isGray onPress={clear} />                
      </View>
      <View style={Styles.row}>
        <Button title="4" isLandScape={window?true:false} onPress={() => handleNumberPress("4")} />
        <Button title="5" isLandScape={window?true:false} onPress={() => handleNumberPress("5")} />
        <Button title="6" isLandScape={window?true:false} onPress={() => handleNumberPress("6")} />
        <Button title="⌫" isLandScape={window?true:false} onPress={() => deleteNumber()}/>     
      </View>
      <View style={Styles.row}>
        <Button title="1" isLandScape={window?true:false} onPress={() => handleNumberPress("1")} />
        <Button title="2" isLandScape={window?true:false} onPress={() => handleNumberPress("2")} />
        <Button title="3" isLandScape={window?true:false} onPress={() => handleNumberPress("3")} />
        <ExcButton isLandScape={window?true:false} onPress={swapSelectedUnits}/> 
                   
      </View>      
      <View style={Styles.row}>
          <Button isLandScape={window?true:false} title="00" onPress={() => handleNumberPress("00")} />
          <Button isLandScape={window?true:false} title="0" onPress={() => handleNumberPress("0")} />
          <Button isLandScape={window?true:false} title="." onPress={() => handleNumberPress(".")} />                
      </View> 
      </View>
           
    </View>      
  );
}


let styles = StyleSheet.create({
  container: {
    color:'#fff',
    marginLeft:'35%',
    alignItems: 'center',
    justifyContent: 'center',      
  },
  top: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',    
    marginLeft:'70%',
    
  },
  first_picker:{    
    width:120,
    height:72,      
    borderRadius: 24,
    backgroundColor: myColors.btnGray,
    margin:3,    
  },
  exchange_button:{    
    height:'180%',
    borderRadius: 24,
    border:3,
    borderColor:'#000',
    borderWidth:3,    
  },
  landscape:{
    left:"70%",
  },
  non_landscape:{

  },
  selector_landscape:{
    top:200,
    right:200,
  },
  input_style:{
     
  }
  
});



export default {MyConverterKeyboard};