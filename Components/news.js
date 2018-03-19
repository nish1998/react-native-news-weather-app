import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, ListView, Text, View, StyleSheet } from 'react-native';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://newsapi.org/v2/everything?q=india&from=2017-12-12&sortBy=popularity&apiKey=[your key here]')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.articles),
        }, function() {
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
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.yellowback}><Text style={styles.bigblue}>{rowData.title}</Text>{"\n"}{rowData.author}{"\n"}
          <Text style={styles.black}>{rowData.description}{"\n"}{"\n"}</Text></Text>}
          
        />
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


AppRegistry.registerComponent('News', () => News);
