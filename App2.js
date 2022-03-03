import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/Login"
import HomeScreen from "./screens/Home"
import SignUpScreen from "./screens/SignUp"
import firebase from 'firebase/app';
import "firebase/auth";

const Stack = createNativeStackNavigator();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const firebaseConfig = {
    apiKey: "AIzaSyBrwUItrQc9rDG_AhgwuTFib3p-41-wb_0",
  authDomain: "finalyearproject-cb4d0.firebaseapp.com",
  databaseURL: "https://finalyearproject-cb4d0-default-rtdb.firebaseio.com",
  projectId: "finalyearproject-cb4d0",
  storageBucket: "finalyearproject-cb4d0.appspot.com",
  messagingSenderId: "844485039668",
  appId: "1:844485039668:web:16574f81b00c3e320a9c61",
  measurementId: "G-N43P3F8WL4"
  };

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });
  


  return (
    <NavigationContainer>
      {isLoggedIn ? <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator> :
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>}
    </NavigationContainer>
  );
      }

export default App;
