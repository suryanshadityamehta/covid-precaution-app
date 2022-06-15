import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Precaution extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"yellow"}}>Precaution Are-</Text>
        <Text> </Text>
        <Text style={styles.points}>1)Keep physical distance of at {"\n"}least 1 metre from others </Text>
        <Text> </Text>
        <Text style={styles.points} >2)Clean your hands frequently with {"\n"}alcohol-based hand rub or soap and water. </Text>
        <Text> </Text>
        <Text style={styles.points} >3)Avoid crowds and close contact</Text>
        <Text> </Text>
        <Text style={styles.points} >4)Wear a properly fitted mask</Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
  points:{
    fontSize: 20
  },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  }
})