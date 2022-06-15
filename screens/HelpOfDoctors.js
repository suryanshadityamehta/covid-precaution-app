import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class HelpOfDoctors extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> </Text>
        <Text style={styles.points}> 1) Help Line Number .</Text>
        <Text> </Text>
        <Text style={styles.points} >  092154786 </Text>
         <Text> </Text>
         <Text style={styles.points}> 2) Write To Us On Mail  .</Text>
        <Text> </Text>
         <Text style={styles.points} > Louis16@gmail.com  </Text>
          <Text> </Text>
           <Text style={styles.points} > Or Visit Our Website </Text>
            <Text> </Text>
            <Text style={styles.points} > www.covidprecaution.com  </Text>
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