
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { TabNavigator  } from 'react-navigation';
import Weather from './Components/weather';
import News from './Components/news';


export default class App extends Component<{}> {
  render() {
    return (
      <MyApp />
    );
  }
}

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Nationnews',
  };

  render() {
    return (
      
        <News />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'KGP weather',
  };

  render() {
    return (
      <View>
      <Weather />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MyApp = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#4a148c',
  },
});


