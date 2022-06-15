import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Symptoms')}>
              <Text style={{ fontSize:20, color:"white"}}>Symptoms</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Precautions')}>
              <Text style={{ fontSize:20, color:"white"}}>Precautions</Text>
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HelpOfDoctors')}>
              <Text style={{ fontSize:20, color:"white"}}>HelpOfDoctors</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('AffectedPeople')}>
              <Text style={{ fontSize:20, color:"white"}}>AffectedPeople</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  },
});
