import React, {Component} from 'react';
var ReactNative = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    TouchableHighlight,
    ViewPagerAndroid,
} = ReactNative;
import ViewPagerC from './pager';

const Images = [
    'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
    'http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg',
];

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
                        .bind(this) }
                    underlayColor='#999999'>
                    <Text>Back</Text>
                </TouchableHighlight>

                <Text>{this.props.data}</Text>

                <ViewPagerC/>
               

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

const styles = StyleSheet.create({
    image:{
        width: 200,
        height: 200
    }
})