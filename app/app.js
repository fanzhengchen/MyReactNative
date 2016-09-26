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
        var flag = false;
        for (var i = 0; i < 50; ++i) {
            var temp = flag;
            array.push({"row": i, "desc": "i descr", "value": temp});
            flag ^= true;
        }
        this.state = {
            dataSource: ds.cloneWithRows(array)
        };
    }
    render() {
        return (<ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <View
            style={{
            flexDirection: 'row',
            flex: 1,
            backgroundColor: rowData.value
                ? "#ff0000"
                : "#00ff00"
        }}>
            <Text style={{}}>
                {rowData.row}
            </Text>
            <Text>
                {rowData.desc}
            </Text>
        </View>}/>);
    }

}
