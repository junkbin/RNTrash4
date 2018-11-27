import React from 'react';
import {View, Text} from 'react-native';
import { WebView } from "react-native-webview";

export class WebViewNew1 extends React.Component {

    render(){
        return (
            <WebView
                originWhitelist={['*']}
                source={{ html: '<h1>This is a static HTML source!</h1> <br/> <input type="file" /> ' }}
            />
        );
    }
}
