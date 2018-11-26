import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class AppWebView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Helloooooo!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'cursive'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
