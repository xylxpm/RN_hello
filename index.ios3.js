/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 这是一个新闻列表的实例
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    View
} from 'react-native';

const Header = require('./header');

class WangYi extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <Header/>
                <List title="喵星人cookie，厨房是个新天地"/>
                <List title="喵星人cookie，踩奶踩奶踩奶～～"/>
                <List title="喵星人cookie，晨间巡视，然后又被撸睡了"/>
                <List title="喵星人cookie妖娆的睡姿"/>
                <ImportantNews news={[
                    '喵星人cookie，厨房是个新天地111',
                    '喵星人cookie，踩奶踩奶踩奶～～2222',
                    '喵星人cookie，晨间巡视，然后又被撸睡了3333然后又被撸睡了3333然后又被撸睡了3333。么么哒么么哒么么哒么么哒',
                    '喵星人cookie妖娆的睡姿444'
                ]}></ImportantNews>
            </View>
        );
    }
}

class ImportantNews extends Component{

    show(title){
        //alert(title);
    }

    render(){
        var news=[];
        for(var i in this.props.news){
            var text = (
              <Text key={i}
                  onPress={this.show.bind(this,this.props.news[i])}
                  numberOfLines={1}
                  style={styles.news_item}
              >{this.props.news[i]}</Text>
            );
            news.push(text)
        }
        return (
            <View style={styles.flex}>
                <Text style={styles.news_title}>今日要闻</Text>
                {news}
            </View>

        );
    }
}


class List extends Component{
    render(){
        return(
            <View style={styles.list_item}>
                <Text style={styles.list_item_font}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    list_item:{
        height:40,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        justifyContent:'center'
    },
    list_item_font:{
        fontSize:16,
    },
    news_item:{
        marginLeft:10,
        marginRight:10,
        fontSize:15,
        lineHeight:40
    },
    news_title:{
        marginTop:20,
        fontSize:20,
        fontWeight:'bold',
        color:'#cd1d1c',
        marginLeft:15,
        marginRight:15,
    }
});

AppRegistry.registerComponent('hello', () => WangYi);
