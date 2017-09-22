/**
 * 带链接池
 * 需要counter.js   event.js   connector.js
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {on,remove} from  './event';
import {setValue,getValue} from  './counter';
import {connector} from './connector';

class _Counter1 extends Component{

    render(){
        return(
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20,marginRight:20}}>计数器：{this.props.data}</Text>
                <Text style={{fontSize:20}} onPress={this.addCounter.bind(this)}>点击我</Text>
            </View>
        );
    }

    addCounter(){
        setValue(getValue()+1);
    }
}



class _Counter2 extends Component{

    render(){
        return(
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20,marginRight:20}}>计数器：{this.props.data}</Text>
                <Text style={{fontSize:20}} onPress={this.addCounter.bind(this)}>点击我</Text>
            </View>
        );
    }

    addCounter(){
        setValue(getValue()+1);
    }
}

let Counter1 = connector('counter-change',_Counter1);
let Counter2 = connector('counter-change',_Counter2);


class ReduxEX extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Counter1 />
                <Counter1 />
                <Counter2 />
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