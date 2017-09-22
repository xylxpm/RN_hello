/**
 * 独立数据，共享模型层，提供操作接口，加入事件监听。微型的mvi
 * 需要counter.js   event.js
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {on,remove} from  './event';
import {setValue,getValue} from  './counter';

class Counter1 extends Component{
    constructor(props) {
        super(props);//这一句不能省略，照抄即可
        this.state = {
            counter:getValue()
        };

        this.handler = ((value)=>{
            this.setState({
                counter:value
            })
        }).bind(this);

    }

    componentDidMount(){
        on('counter-change',this.handler)
    }
    componentWillUnmount(){
        remove('counter-change',this.handler)
    }


    render(){
        return(
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20,marginRight:20}}>计数器：{this.state.counter}</Text>
                <Text style={{fontSize:20}} onPress={this.addCounter.bind(this)}>点击我</Text>
            </View>
        );
    }

    addCounter(){
        setValue(getValue()+1);
        this.setState({
            counter:getValue()
        });
    }
}



class Counter2 extends Component{
    constructor(props) {
        super(props);//这一句不能省略，照抄即可
        this.state = {
            counter:0,
        };
        this.handler = ((value)=>{
            this.setState({
                counter:value
            })
        }).bind(this);

    }

    componentDidMount(){
        on('counter-change',this.handler)
    }
    componentWillUnmount(){
        remove('counter-change',this.handler)
    }

    render(){
        return(
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20,marginRight:20}}>计数器：{this.state.counter}</Text>
                <Text style={{fontSize:20}} onPress={this.addCounter.bind(this)}>点击我</Text>
            </View>
        );
    }

    addCounter(){
        setValue(getValue()+1);
        this.setState({
            counter:getValue()
        });
    }
}


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