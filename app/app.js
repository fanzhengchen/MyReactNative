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

import Cell from './cell'

const styles = StyleSheet.create({
    separator: {
        flex: 1,
        backgroundColor: '#ededed'
    },

    row:{
        flex: 100,
        backgroundColor: '#FFFFFF',
    },
});

export default class App extends React.Component {
    constructor(props) {
        super(props);
        // this.renderRow = this.renderRow.bind(this);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        var array = [];
        var flag = false;
        for (var i = 0; i < 100; ++i) {
            var temp = flag;
            array.push({"row": i, "desc": "i descr", "value": temp});
            flag ^= true;
        }
        this.state = {
            dataSource: ds.cloneWithRows(array)
        };
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderSeparator={(sectionID, rowID) => <View key={rowID} style={styles.separator}/>}
                renderRow={(rowData) => <View
                style={styles.row}>
                <Cell/>
            </View>}/>
        );
    }

}
