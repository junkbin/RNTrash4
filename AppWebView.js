import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { WebView } from 'react-native';


export default class AppWebView extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h3>START</h3><iframe width="100%" height="300" src="http://jsfiddle.net/viveking/gxvu5r6s/2/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe> <h3>LAST</h3>' }}
      />
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
