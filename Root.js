import {AppRegistry, View, Text,} from 'react-native';
import React, {Component} from 'react';

import App from './app/app';


export default class Root extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <App />
        );
    }
};

AppRegistry.registerComponent('hello', () => Root);


