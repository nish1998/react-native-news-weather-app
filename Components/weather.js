import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, ListView, Text, View, StyleSheet } from 'react-native';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://api.openweathermap.org/data/2.5/forecast?q=kharagpur&APPID=67337c56ad6e914fd845e1fb3162cc64&units=Metric')
      .then((response) => response.json())
      .then((responseJson) =>{
        let weatherList = responseJson.list[0]

        this.setState({
           isLoading: false,
           temperature: weatherList.main.temp,
           pressure: weatherList.main.pressure

        
      });
  })
    .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
       <Text style={styles.bigblue}> Temperature now: {this.state.temperature} C {"\n"} Pressure now: {this.state.pressure}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: '#212121',
    fontWeight: 'bold',
    fontSize: 25,
  },
black: {
    color: 'black',
    
    fontSize: 20,
  },
  yellowback: {
    backgroundColor: '#e3f2fd',
    padding: 5,
  },
});
AppRegistry.registerComponent('Weather', () => Weather);