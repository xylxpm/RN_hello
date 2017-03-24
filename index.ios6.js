/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 这是文本框的实例，搜索框，密码框
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    PixelRatio,
    StyleSheet,
    TextInput,
    Text,
    View
} from 'react-native';

var onePT = 1 / PixelRatio.get();

class XuYan extends Component {
    render() {
        return (
            <View style={[styles.flex,styles.topStatus]}>
                <Search/>
            </View>
        );
    }
}


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            value: null
        };
    }

    hide(val) {
        this.setState({
            show: false,
            value: val
        })
    }

    getValue(text) {
        this.setState({
            show: true,
            value: text
        })
    }

    render() {
        return (
            <View style={[styles.flex]}>
                <View style={[styles.flexDirection]}>
                    <View style={[styles.flex,styles.input]}>
                        <TextInput
                            style={[styles.flex]}
                            returnKeyType="search"
                            placeholder="请输入关键词"
                            value={this.state.value}
                            onChangeText={this.getValue.bind(this)}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.btn}><Text style={styles.search}
                                                   onPress={this.hide.bind(this,this.state.value)}>搜索</Text></View>
                </View>

                {this.state.show && this.state.value != "" && this.state.value != null ?
                    <View style={styles.lists}>
                        <Text style={styles.lists_item} numberOfLines={1}
                              onPress={this.hide.bind(this,this.state.value+'测试1')}>{this.state.value} 测试1</Text>
                        <Text style={styles.lists_item} numberOfLines={1}
                              onPress={this.hide.bind(this,this.state.value+'测试2')}>{this.state.value} 测试2</Text>
                        <Text style={styles.lists_item} numberOfLines={1}
                              onPress={this.hide.bind(this,this.state.value+'测试3')}>{this.state.value} 测试3</Text>
                    </View>
                    : null}

            </View>
        )
    }
}


const styles = StyleSheet.create({
    flex: {
        flex: 1,

    },
    flexDirection: {
        flexDirection: 'row',
    },
    topStatus: {
        marginTop: 25,
    },
    input: {
        height: 45,
        borderColor: '#23BEFF',
        borderWidth: 1,
        marginLeft: 10,
        paddingLeft: 10,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    btn: {
        width: 45,
        marginRight: 10,
        backgroundColor: '#23BEFF',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    lists: {
        marginTop: onePT - 1,
        borderColor: '#23BEFF',
        borderWidth: 1,
        marginLeft: 17,
        marginRight: 55,
        paddingLeft: 10,
        height: 200,
    },
    lists_item: {
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 10,
    },

});

AppRegistry.registerComponent('hello', () => XuYan);
