import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';
import db from '../config';

 export default class AffectedPeople extends Component {
 teamA(){
   db.ref('/').update({
     'Affected People':1000
   })
 }

 teamB(){
   db.ref('/').update({
     'Non Affected People ':500
   })
 }

  render() {
    return (
      <View>
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.teamA()}>
              <Text style={{ fontSize:20}}> Affected People</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.teamB()}>
              <Text style={{ fontSize:20}}>Non Affected People</Text>
            </TouchableOpacity>

 <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    backgroundColor:"#FFC300",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin:10,
    width: 150,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});

