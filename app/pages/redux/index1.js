/**
 * 原始代码
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class Counter1 extends Component{
    constructor(props) {
        super(props);//这一句不能省略，照抄即可
        this.state = {
            counter:0,
        };
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
        this.setState({
            counter:this.state.counter+1
        });
    }
}

class Counter2 extends Component{
    constructor(props) {
        super(props);//这一句不能省略，照抄即可
        this.state = {
            counter:0,
        };
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
        this.setState({
            counter:this.state.counter+1
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