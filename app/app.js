/**
 这里是程序入口
 **/

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Redux from './pages/redux/index'
import WebViewDemo from './pages/webView/index2'
import Other from './pages/other/index'

export default class App extends Component {
    render() {
        return (

            <Redux/>
        );
    }
}


