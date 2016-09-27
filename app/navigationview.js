import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    ListView
} from 'react-native';

export default class NavigationView extends Component {

    render() {
        return (
            <View
                style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
                <Text
                    style={{
                    margin: 10,
                    fontSize: 15,
                    textAlign: 'left'
                }}>I'm in the Drawer!</Text>
            </View>
        );
    };
}