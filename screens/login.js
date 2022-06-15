import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import Panel from 'react-native-panel';

export default class LogInScreen extends React.Component {
  render() {
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("https://covid19.odisha.gov.in/images/gfx/banner.png")} />
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dark green",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 20,
    marginTop:-60, 
    width: 100,
    height: 100, 
    borderRadius: 200,
  },
 
  inputView: {
    backgroundColor: "yellow",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    color: 'white',
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: 'white',
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:'#7bc',
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#2af598",
  },

   loginText: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'century gothic',
    color: 'white',
    textAlign: 'center',
  }
});