import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator
} from 'react-native';

const styles = StyleSheet.create({cellParent: {}});

const Color = {
    redColor: '#FF0000'
};

export default class Cell extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View
                style={{
                padding: 10,
                flexDirection: 'row'
            }}>
                <Image
                    source={require('../images/download.jpeg')}
                    style={{
                    width: 100,
                    height: 100
                }}/>

                <View
                    style={{
                    flex: 2,
                    marginLeft: 10,
                    flexDirection: 'column'
                }}>
                    <Text style={{
                        color: '#0f0f00'
                    }}>ProductName</Text>

                    <Text>price: $100
                    </Text>

                    <Text>
                        commission: 12%
                    </Text>

                    <View
                        style={{
                        flex: 1,
                        alignItems: 'flex-start',
                        marginTop: 2
                    }}>
                        <Text
                            style={{
                            backgroundColor: '#c3a464',
                            paddingLeft: 10,
                            paddingRight: 10,
                            color: '#FFFFFF',
                            textAlign: 'left'
                        }}>
                            high level
                        </Text>
                    </View>

                    <Text style={{
                        color: '#333333'
                    }}>
                        profit rate
                    </Text>
                </View>

                <View
                    style={{
                    alignItems: 'flex-end',
                    flexDirection: 'column-reverse'
                }}>

                    <View
                        style={{
                        padding: 5,
                        borderWidth: 1,
                        borderRadius: 3,
                        borderColor: Color.redColor
                    }}>
                        <Text
                            style={{
                            color: Color.redColor
                        }}>
                            Take a deal
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}