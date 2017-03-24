/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * touchable类
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    PixelRatio,
    StyleSheet,
    TextInput,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';



class XuYan extends Component {
    _click(txt){
        alert(txt)
    }
    render() {
        return (
            <View style={[styles.flex,styles.margin25]}>
                <TouchableHighlight onPress={this._click.bind(this,"喵喵喵111")} underlayColor='#FF60EF'>
                    <Text style={styles.item}>喵喵喵111</Text>
                </TouchableHighlight>
                <TouchableOpacity onPress={this._click.bind(this,"喵喵喵222")} >
                    <Text style={styles.item}>喵喵喵222</Text>
                </TouchableOpacity>

            </View>
        );
    }
}





const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    item:{
        fontSize:16,
        color:'#23BEFE',
        marginLeft:10,
        marginRight:10
    },
    margin25:{
        marginTop:25
    }
});

AppRegistry.registerComponent('hello', () => XuYan);
