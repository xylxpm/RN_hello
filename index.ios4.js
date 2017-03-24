/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 这是Navigator的实例,路由和参数传
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Navigator,
    ScrollView,
    Text,
    View
} from 'react-native';


class XuYan extends Component {
    render() {
        let defaultName = 'list';
        let defaultComponent = List;

        return (
            <Navigator
                initialRoute={{name:defaultName,component:defaultComponent}}
                configureScene={
                    (route)=>{
                        return Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft
                    }
                }
                renderScene={
                    (route,navigatou)=>{
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigatou}/>
                    }
                }
            />
        );
    }
}

class Detail extends Component {

    constructor(props){
        super(props);
        this.state={};
    }

    _pressD() {
        const {navigator} = this.props;
        if(navigator){
            navigator.push({
                name:'Details',
                component:Details
            })
        }
    }

    _pressU() {
        const {navigator} = this.props;
        if(navigator){
            navigator.pop()
        }
    }

    componentDidMount(){
        this.setState({
            author:this.props.author,
        })
    }

    render() {
        return (
            <ScrollView style={styles.flex}>
                <Text style={styles.list_item } onPress={this._pressU.bind(this)} >上一页</Text>
                <Text style={styles.list_item } onPress={this._pressD.bind(this)} >下一页</Text>

                <Text style={styles.list_item } >作者是：{this.state.author}</Text>
            </ScrollView>
        );
    }
}

class Details extends Component {

    _press() {
        const {navigator} = this.props;
        if(navigator){
            navigator.pop()
        }
    }

    render() {
        return (
            <ScrollView style={styles.flex}>
                <Text style={styles.list_item } onPress={this._press.bind(this)} >点击返回上一页1111</Text>
            </ScrollView>
        );
    }
}

class List extends Component {
    constructor(props){
        super(props);
        this.state={
            author:'cookie'
        }
    }

    _click() {
        const {navigator} = this.props;
        if(navigator){
            navigator.push({
                name:'Detail',
                component:Detail,
                params:{
                    author:this.state.author
                }
            })
        }
    }

    render() {
        return (
            <ScrollView style={styles.flex}>
                <Text style={styles.list_item} onPress={this._click.bind(this)}>喵星人cookie，厨房是个新天地</Text>
                <Text style={styles.list_item} onPress={this._click.bind(this)}>喵星人cookie，踩奶踩奶踩奶～～</Text>
                <Text style={styles.list_item} onPress={this._click.bind(this)}>喵星人cookie，然后又被撸睡了</Text>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    flex: {
        flex: 1,
        marginTop: 40,
    },
    list_item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center'
    },

});

AppRegistry.registerComponent('hello', () => XuYan);
