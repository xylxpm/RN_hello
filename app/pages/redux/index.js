/**
 * 使用了redux的例子，包含action,reducer,store
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {connect, Provider} from 'react-redux';
import {plus} from '../../action/action';
import {getStore} from '../../store/configureStore';

const store = getStore();

class _Counter1 extends Component {

    render() {
        return (
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20,marginRight:20}}>组件1的计数器：{this.props.calculate.c}</Text>
                <Text style={{fontSize:20}} onPress={this.addCounter.bind(this)}>点击我</Text>
            </View>
        );
    }

    addCounter() {
        this.props.dispatch(plus(1))
    }
}


class _Counter2 extends Component {

    render() {
        return (
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20,marginRight:20}}>组件2的计数器：{this.props.calculate.c}</Text>
                <Text style={{fontSize:20}} onPress={this.addCounter.bind(this)}>点击我</Text>
            </View>
        );
    }

    addCounter() {
        this.props.dispatch(plus(1))
    }
}


const mapStateToProps = state =>{
    return{
        calculate:state.calculate
    }
}

let Counter1 = connect(mapStateToProps)(_Counter1);
let Counter2 = connect(mapStateToProps)(_Counter2);


class ReduxEX extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Counter1 />
                    <Counter1 />
                    <Counter2 />
                </View>
            </Provider>
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