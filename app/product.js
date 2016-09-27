import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    TouchableHighlight
} from 'react-native';
import Pager from './pager';

export default class Product extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'column'
            }}>
                <Text>Product</Text>

                <TouchableHighlight
                    onPress={this
                    ._onBack
                    .bind(this)}
                    underlayColor='#999999'>
                    <Text>Back</Text>
                </TouchableHighlight>

                <Text>{this.props.data}</Text>


            </View>
        );
    }

    _onBack() {
        this
            .props
            .navigator
            .pop();
    }

};