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
    ToastAndroid
} = ReactNative;
import ViewPagerC from './pager';
import Demo from './demo';

const Images = [
    'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg', 'http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images' +
            '/recent-images-11.jpg'
];

const Uri =[
    'https://m.baidu.com',
    'http://mobile.sina.com.cn/',
    'http://info.3g.qq.com/',
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
                    .bind(this)}
                    underlayColor='#999999'>
                    <Text>Back</Text>
                </TouchableHighlight>

                <Text>{this.props.data}</Text>

                <ViewPagerC/>

                <TouchableHighlight
                    onPress={this
                    .getRequest
                    .bind(this)}>
                    <Text>get</Text>
                </TouchableHighlight>

                <View style={{
                    flexDirection: 'row'
                }}>
                    <TouchableHighlight
                        onPress={() => this.onNext(Uri[0])}>
                        <View
                            style={{
                            width: 100,
                            height: 100,
                            backgroundColor: '#3f1f3f',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                color: '#00ff00'
                            }}>baidu</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => this.onNext(Uri[1])}>
                        <View
                            style={{
                            width: 100,
                            height: 100,
                            backgroundColor: '#3f1f3f',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                color: '#00ff00'
                            }}>sina</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                         onPress={() => this.onNext(Uri[2])}>
                        <View
                            style={{
                            width: 100,
                            height: 100,
                            backgroundColor: '#3f1f3f',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                color: '#00ff00'
                            }}>qq</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <Demo/>
            </View>

            
            
        );
    }

    _onBack() {
        this
            .props
            .navigator
            .pop();
    }

    getRequest() {
        fetch('https://m.baidu.com').then((response) => response.text()).then((responseText) => {
            ToastAndroid.show(responseText, ToastAndroid.SHORT);
            console.warn(new Date().getMilliseconds());
        }).catch((error) => {
            console.warn(error);
        }).done();
        console.warn('请求是异步的:' + new Date().getMilliseconds());
    }

    onNext(url) {
        this
            .props
            .navigator
            .push({
                id: 'webview',
                passProps: {
                    uri: url
                }
            });
    }

};

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    }
})