import * as React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from './src/components/Button';
import MyKeyboard from './src/components/Keyboard';
import { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Styles } from './src/styles/GlobalStyles';


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
      <TouchableOpacity style={styles.menu_button_style} onPress={() => navigation.navigate('Menu')}>
          <Image style={styles.menu_select_image} source={require('./src/assets/images/currency_image.png')}/>
          <Text>Currency</Text>    
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu_button_style} onPress={() => navigation.navigate('Menu')}>
          <Image style={styles.menu_select_image} source={require('./src/assets/images/length_image.png')}/>
          <Text>Length</Text>    
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu_button_style} onPress={() => navigation.navigate('Menu')}>
          <Image style={styles.menu_select_image} source={require('./src/assets/images/speed_image.png')}/>
          <Text>Speed</Text>    
      </TouchableOpacity>     
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* screenOptions={{headerShown:false}}       */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={({navigation}) => ({
            headerTitle: () => <Text>Calculator</Text>,
            headerRight: () =>               
              <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                  <Image style={styles.menu_image} source={require('./src/assets/images/menu_image.png')}/>
              </TouchableOpacity>,
          })}/>
      
        <Stack.Screen name="Menu" component={MenuScreen} />
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
