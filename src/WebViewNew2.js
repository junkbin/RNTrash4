import React from 'react';
import { WebView } from "react-native-webview";

export class WebViewNew2 extends React.Component {

    render(){
        return (
            <WebView
                source={{ uri: "https://affixus.github.io/native-input/"}}
                style={{ marginTop: 30 }}
                onLoadProgress={e => console.log(e.nativeEvent.progress)}
            />
        );
    }
}
