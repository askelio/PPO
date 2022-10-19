import React, { useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLandscape: {
    backgroundColor: '#000',
    height: 100,
    width: 300
  },
  box: {
    backgroundColor: 'red',
    height: 100,
    width: 100
  },
});

const screen = Dimensions.get('screen');

export const MyTest =  () => {
  const isLandscape = screen.width > screen.height;
  const [window, setWindow] = useState(false);
  Dimensions.addEventListener('change',()=>{
    setWindow(!window);
  })
  alert(window)
  return (
    <View style={window ? styles.box : styles.containerLandscape}>
      
    </View>
  );
};

