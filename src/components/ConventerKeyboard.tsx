import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";
import { useState } from "react";
import { StyleSheet, } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { getCurrencyRates } from "./CurrencyExchangeRates";


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






export const MyConverterKeyboard = ({converterType}:{converterType:string}) => {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<Number | null >(null);
  const [selected, setSelected] = useState(undefined);  

  const [selectedUnit_2, setSelectedUnit_2] = useState(0);
  const [selectedUnit_1,setSelectedUnit_1] = useState(0);

  var data = converterData.lehgth;

  switch(converterType){
    case 'length':data =converterData.lehgth;
    break;
    case 'currency': 
    data =converterData.currency;
    if(data.length ===1){
    getCurrencyRates(data);    
    }
    break;
    case 'speed':data = converterData.speed
    break;
  }

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);      
    }
  }; 

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const firstNumberDisplay = () => {   
     
    if (firstNumber === "") {
      return <Text>{"0"}</Text>;
    }
    else{
      return <Text>{firstNumber}</Text>;
    }      
  };
  
  

  const getResult = () =>{
    if(selectedUnit_1 === 0 && selectedUnit_2===0){
        setSelectedUnit_1(data[0].value);
        setSelectedUnit_2(data[0].value);
    
    }
    if (firstNumber === "") {
      return(<Text>{(0 * selectedUnit_2/selectedUnit_1).toString()}</Text>)
    }
    else{
      return(<Text>{(parseFloat(firstNumber) * selectedUnit_2/selectedUnit_1).toString()}</Text>)
    }   
  }  

  
  return (    
    <View style={Styles.viewBottom}>      
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
        {firstNumberDisplay()}
        
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
        <Text>{getResult()}</Text>
        
        

      </View>

      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="C" isGray onPress={clear} />                
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />     
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />        
      </View>
      <View style={Styles.row}>
        <Button title="00" onPress={() => handleNumberPress("00")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button title="." onPress={() => handleNumberPress(".")} />       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginTop:0,
    marginLeft:'70%',
    
  },
  first_picker:{    
    width:150,
    height:72,    
    borderRadius: 24,
    backgroundColor: myColors.btnGray,
    margin:3,
    
  },
});

export default {MyConverterKeyboard};