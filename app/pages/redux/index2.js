/**
 * 数据同步：全靠父组件
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class Counter1 extends Component {
    constructor(props) {
        super(props);//这一句不能省略，照抄即可
    }

    render() {
        return (
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20,marginRight:20}}>计数器：{this.props.c}</Text>
                <Text style={{fontSize:20}} onPress={this.props.onPress}>点击我</Text>
            </View>
        );
    }

}

class Counter2 extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20,marginRight:20}}>计数器：{this.props.c}</Text>
                <Text style={{fontSize:20}} onPress={this.props.onPress}>点击我</Text>
            </View>
        );
    }

    addCounter() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
}


class ReduxEX extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0,
        };
    }

    _press(){
        this.setState({
            counter:this.state.counter+1
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Counter1 c={this.state.counter} onPress={this._press.bind(this)} />
                <Counter1 c={this.state.counter} onPress={this._press.bind(this)} />
                <Counter2 c={this.state.counter} onPress={this._press.bind(this)} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});


export default ReduxEX;