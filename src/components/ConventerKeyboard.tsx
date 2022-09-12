import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";
import { useState } from "react";
import { StyleSheet, } from "react-native";
import { Picker } from "@react-native-picker/picker";





// const data = [
  //   { label: 'Meter (m)', value: 1 },
  //   { label: 'Yard (yd)', value: 1.0936133 },
  //   { label: 'Foot (ft)', value: 3.2808399 },
  //   { label: 'Mile (mi)', value: 0.0006214 },
  //   { label: 'Inch (in)', value: 39.3700787 },
  // ];

  // const data = [
  //   { label: 'Item 1', value: '1' },
  //   { label: 'Item 2', value: '2' },
  //   { label: 'Item 3', value: '3' },
  //   { label: 'Item 4', value: '4' },
  //   { label: 'Item 5', value: '5' },
  //   { label: 'Item 6', value: '6' },
  //   { label: 'Item 7', value: '7' },
  //   { label: 'Item 8', value: '8' },
  // ];




export const MyDropdownComponent = () => {const [
  selectedLanguage, setSelectedLanguage] = useState();
  const data = [{key:'1',value:'Jammu & Kashmir'}];

  return(
    
    <View style={styles.first_picker}>
      <Text style={styles.container}>First</Text>
      <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Java" value="java"/>
          <Picker.Item label="PavaScript" value="js" />
      </Picker>       
    </View>           
  )
};




export const MyConverterKeyboard = () => {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<Number | null >(null);
  const [selected, setSelected] = useState(undefined);  

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
    if (result !== null) {
        return <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: myColors.result}] : [Styles.screenFirstNumber, {fontSize: 50, color: myColors.result}]}>{result?.toString()}</Text>; 
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };  

  const [selectedLanguage, setSelectedLanguage] = useState();
  const data = [{key:'1',value:'Jammu & Kashmir'}];

  return (   

    

    <View style={Styles.viewBottom}>      
      <View style={Styles.row}>
        <View style={styles.first_picker}>
          <Text style={styles.container}>First</Text>
          <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Java" value="java"/>
              <Picker.Item label="PavaScript" value="js" />
          </Picker>       
        </View>  
        <Text>First Text</Text>
      </View>
      
      
      

      <View style={Styles.row}>
        <View style={styles.first_picker}>
          <Text style={styles.container}>Second</Text>
          <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Java" value="java"/>
              <Picker.Item label="PavaScript" value="js" />
          </Picker>       
        </View>  
        <Text>Second Text</Text>
      </View>

      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
        </Text>
        {firstNumberDisplay()}
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
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
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

export default {MyDropdownComponent, MyConverterKeyboard};