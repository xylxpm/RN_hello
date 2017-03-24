/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    View
} from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font1}>网易</Text>
                    <Text style={styles.font2}>新闻</Text>
                    <Text>有态度～</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        marginTop:25,
        height:50,
        borderBottomColor:'#ef2d36',
        borderBottomWidth:3/PixelRatio.get(),
        alignItems:'center'
    },
    font:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    },
    font1:{
        color:'#cd1d1c'
    },
    font2:{
        color:'#fff',
        backgroundColor:'#cd1d1c'
    }
});

module.exports=Header;


