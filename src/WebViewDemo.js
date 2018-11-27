import React from 'react';
import {WebView, Text, StyleSheet} from 'react-native';

export class WebViewDemo extends React.Component{
    render(){
        return (
            <WebView
                originWhitelist={['*']}
                source={{ html: '<h3>START</h3><iframe width="100%" height="300" src="http://jsfiddle.net/viveking/gxvu5r6s/2/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe> <h3>LAST</h3>' }}
            />
        );
    }
}

