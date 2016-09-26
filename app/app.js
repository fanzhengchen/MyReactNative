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
    ListView
} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        // this.renderRow = this.renderRow.bind(this);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        var array = [];
        for (var i = 0; i < 50; ++i) {
            array.push("row " + i);
        }
        this.state = {
            dataSource: ds.cloneWithRows(array)
        };
    }
    render() {
        return (<ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <View>
            <Text>
                {rowData}
            </Text>
        </View>}/>);
    }

}
