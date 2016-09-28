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
    DrawerLayoutAndroid
} from 'react-native';

import FirstPageComponent from './views/FirstPageComponent';
import App from './app/app';
import NavigationView from './app/navigationview';
import Product from './app/product';
import Toolbar from './app/toolbar';

class rn extends Component {

    render() {
        return (<Navigator
            initialRoute={{
            id: "App",
            name: 'Index'
        }}
            renderScene={this
            .renderView
            .bind(this)}
            configureScene={this.configureScene.bind(this)}
             navigationBar={
     <Navigator.NavigationBar
       style={{backgroundColor: 'gray'}}
     />
  }
            />);
    }

    renderView(route, navigator) {
        if (route.id == 'App') { 
            return (
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Right}
                    renderNavigationView={() => <NavigationView navigator={navigator}/>}>
                    <App navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }else if(route.id == 'Product'){
            return (
                <Product navigator={navigator} {...route.passProps}/>
            );
        }
    }

    configureScene(route){
        return Navigator.SceneConfigs.FloatFromRight;
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
