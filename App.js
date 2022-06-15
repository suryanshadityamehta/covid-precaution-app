import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import HomeScreen from './screens/HomeScreen';
import HelpOfDoctors from './screens/HelpOfDoctors';
import Precautions from './screens/precautions';
import Symptoms from './screens/Symptoms';
import AffectedPeople from './screens/AffectedPeople';
import login from './screens/login';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Symptoms: Symptoms,
  HelpOfDoctors:HelpOfDoctors,
  Precautions:Precautions,
  AffectedPeople: AffectedPeople,
  login:login,
});

const AppContainer = createAppContainer(AppNavigator);
