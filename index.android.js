/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * ViewPagerAndroid 组件（常见引导页面）
 */
'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ViewPagerAndroid,
    View
} from 'react-native';


class DongFang1 extends Component {
    render() {

        return (
           <ViewPagerAndroid initialPage={0} style={styles.flex}>
               <View><Text>1111</Text></View>
               <View><Text>2222</Text></View>
               <View><Text>3333</Text></View>

           </ViewPagerAndroid>
        );
    }
}




const styles = StyleSheet.create({
flex:{
    flex:1
}



});

AppRegistry.registerComponent('hello', () => DongFang1);
