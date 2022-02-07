import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



export default function App() {
 
  return (
    <View style= {{padding: 250, flexDirection: 'row-reverse', justifyContent: 'center'}}>

<View style={{
  backgroundColor: 'red',
  width: 100,
  height: 100,
  justifyContent: 'center',
  alignItems: 'center'}}>

  <Text>1</Text>
</View>
  <View style={{
  backgroundColor: 'blue',
  width: 100,
  height: 100,
  justifyContent: 'center',
  alignItems: 'center'}}>
  <Text>2</Text>
    
  </View>
  <View style={{
  backgroundColor: 'green',
  width: 100,
  height: 100,
  justifyContent: 'center',
  alignItems: 'center'}}>
  <Text>3</Text>
    
  </View>




</View>
  );
}

