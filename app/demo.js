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
    ListView,
    Alert,
    Animated
} from 'react-native';
export default class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(1)
        };
    }
    componentDidMount() {
        // Animated .timing(this.state.fadeAnim, {toValue: 1}) .start();
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => this.startAnimation()}>
                    <Text>animation</Text>
                </TouchableHighlight>
                <Animated.Text
                    style={{
                    opacity: this.state.fadeAnim
                }}>
                    adfa
                </Animated.Text>
            </View>
        );
    }

    startAnimation() {
        Animated
            .timing(this.state.fadeAnim, {toValue: 0})
            .start();
        a
    }
}
