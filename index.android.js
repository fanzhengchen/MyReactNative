/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
} from 'react-native';

import FirstPageComponent from './views/FirstPageComponent';
import App from './app/app';

class rn extends Component {

    render() {

        var navigationView = (
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
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView}>
                <App/>
            </DrawerLayoutAndroid>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    bigBlue: {
        color: '#00FF00',
        margin: 30,
        textAlign: 'left',
        fontSize: 40
    }
});

AppRegistry.registerComponent('rn_mac', () => rn);
