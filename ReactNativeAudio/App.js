/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';
import {COLOR, ThemeContext, getTheme} from 'react-native-material-ui';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

const AppNavigator = createStackNavigator( 
  {
    Home: HomeScreen,
    Details: DetailScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return ( 
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <AppContainer />
      </ThemeContext.Provider>
    );
  }
}
