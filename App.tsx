import * as React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyKeyboard from './src/components/Keyboard';
import { TouchableOpacity } from 'react-native';
import { MyConverterKeyboard } from './src/components/ConventerKeyboard';
import { MyTest } from './src/components/temp';


//To identify current orientation



function HomeScreen({navigation}:{navigation:any}) {  
  return (
    
    <View style={styles.container}>
      <View style={styles.top}>        
      </View>       
        <MyKeyboard/>
    </View>
  );
}


function MenuScreen({navigation}:{navigation:any}) { 
  

  return (
    <View style={styles.menu_style}>
      <TouchableOpacity style={styles.menu_button_style} onPress={() => navigation.navigate('Converter',{converterType:'currency'})}>
          <Image style={styles.menu_select_image} source={require('./src/assets/images/currency_image.png')}/>
          <Text>Currency</Text>    
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu_button_style} onPress={() => navigation.navigate('Converter',{converterType:'length'})}>
          <Image style={styles.menu_select_image} source={require('./src/assets/images/length_image.png')}/>
          <Text>Length</Text>    
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu_button_style} onPress={() => navigation.navigate('Converter',{converterType:'speed'})}>
          <Image style={styles.menu_select_image} source={require('./src/assets/images/speed_image.png')}/>
          <Text>Speed</Text>    
      </TouchableOpacity>    
    </View>
  );
}

function ConverterScreen({route,navigation}:{route:any, navigation:any}){  
  const {converterType} = route.params;
  return(
    <View style={styles.container}>        
        <MyConverterKeyboard converterType={converterType}/>
    </View>
  )  
      
}



const Stack = createNativeStackNavigator();
const BASE_URL = 'https://api.exchangeratesapi.io/v1/latest?access_key=auDYifam2Ves3V2jl9OCxzahYSGOc2xv';




function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={({navigation}) => ({
            headerTitle: () => <Text>Calculator</Text>,
            headerRight: () =>               
              <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                  <Image style={styles.menu_image} source={require('./src/assets/images/menu_image.png')}/>
              </TouchableOpacity>,
          })}/>
        
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Converter" component={ConverterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  menu_image:{
    flex:1,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  menu_select_image:{    
    width: 100,
    height: 100,
    resizeMode: 'contain',
    maxWidth: '100%',
    margin:'2%',
    
  },
  menu_style:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  menu_button_style:{
    margin:'2%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20
  },
});

export default App;
