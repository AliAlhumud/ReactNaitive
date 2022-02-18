import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from "react-native"
import TextBox from "../components/TextBox"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }    ,
    img:{
        
        resizeMode: "contain",
        height: 100,
        width: 200,
        marginVertical:10

        
            }
})

export default function Loginscreen({ navigation }) {

    const [values, setValues] = useState({
        email: "",
        pwd: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function Login() {

        const { email, pwd } = values

        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then(() => {
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
    }

    return <View style={styles.view}>
       
        <Image style={styles.img} source={require('../assets/p1.png')} />
     <Text style={{ fontSize: 20, fontWeight: "800", marginBottom: 20 }}>Smart package storage & delivery</Text> 
        <TextBox placeholder="  Email Address"  onChangeText={text => handleChange(text, "email")} />
        
        <TextBox placeholder="  Password" onChangeText={text => handleChange(text, "pwd")} secureTextEntry={true} />
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
            <Btn onClick={() => Login()} title="Login" style={{ width: "48%" }} />
            <Btn onClick={() => navigation.navigate("Sign Up")} title="Sign Up" style={{ width: "48%", backgroundColor: "#344869" }} />
           
    
    </View>
    </View>
}
