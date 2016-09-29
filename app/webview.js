import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    ToolbarAndroid,
    ToastAndroid,
    TouchableHighlight,
    TouchableOpacity,
    DrawerLayoutAndroid,
    WebView
} from 'react-native';

export default class WebViewContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WebView source={{
                uri: this.props.uri
            }}></WebView>
        );
    }
}