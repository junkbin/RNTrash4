import React from 'react';
import {View, Text} from 'react-native';
import { WebView } from "react-native-webview";

export class WebViewNew extends React.Component {

    render(){
        return (
            <WebView
                source={{ uri: "https://infinite.red/react-native" }}
                style={{ marginTop: 20 }}
                onLoadProgress={e => console.log(e.nativeEvent.progress)}
            />
        );
    }
}
