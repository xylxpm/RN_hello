/**
 * 使用webView，初级使用
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    WebView,
    Dimensions,
    Platform
} from 'react-native';

const {width, height} = Dimensions.get('window');

const url = 'http://www.58.com';


class WebViewDemo extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <WebView
                    style={{width:width,height:height-20,backgroundColor:'gray'}}
                    source={{uri:url,method:'get'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                />
            </View>
        )
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop:Platform.OS === 'ios'?20:0
    },
});

export default WebViewDemo;
