/**
 这里是程序入口
 **/

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    View
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <View style={styles.container}>
                    <View style={[styles.item,styles.center]}>
                        <Text style={styles.font}>酒店</Text>
                    </View>
                    <View style={[styles.item,styles.lineLeftRight]}>
                        <View style={[styles.flex,styles.center,styles.lineCenter]}>
                            <Text style={styles.font}>海外酒店</Text>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text style={styles.font}>优惠酒店</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={[styles.flex,styles.center,styles.lineCenter]}>
                            <Text style={styles.font}>团购</Text>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text style={styles.font}>公寓</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:200,
        marginLeft:5,
        marginRight:5,
        height:84,
        flexDirection: 'row',
        backgroundColor: '#000',
        padding:2,
        borderRadius:5
    },
    font:{
        color:'#fff',
        fontSize:16,
        fontWeight:"bold"
    },
    item: {
        flex: 1,
        height: 80,
    },
    center: {
        alignItems: 'center',
        justifyContent: "center"
    },
    flex: {
        flex: 1
    },
    lineLeftRight:{
        borderLeftWidth:1/PixelRatio.get(),
        borderRightWidth:1/PixelRatio.get(),
        borderColor:'#fff'
    },
    lineCenter:{
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#fff'
    }
});

