import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

export default class Toolbar extends Component{
    render(){
        return(
           <Navigator.NavigatorBar
           />
        );
    }
} 