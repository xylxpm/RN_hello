/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 模仿qq登陆，无头像
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Text,
    View
} from 'react-native';



class XuYan extends Component {
    render() {

        return (
            <View style={{backgroundColor:'#f4f4f4',flex:1}}>

                <TextInput
                    style={styles.style_user_input}
                    placeholder='QQ号/手机号/邮箱'
                    numberOfLines={1}
                    autoFocus={true}
                    underlineColorAndroid={'transparent'}
                    textAlign='center'
                />
                <View
                    style={{height:1,backgroundColor:'#f4f4f4'}}
                />
                <TextInput
                    style={styles.style_pwd_input}
                    placeholder='密码'
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}
                    textAlign='center'
                />
                <View
                    style={styles.style_view_commit}
                >
                    <Text style={{color:'#fff'}}>
                        登录
                    </Text>

                </View>

                <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
                    <Text style={styles.style_view_unlogin}>
                        无法登录?
                    </Text>
                    <Text style={styles.style_view_register}>
                        新用户
                    </Text>
                </View>
            </View>
        );
    }
}





const styles = StyleSheet.create({
    style_image:{
        borderRadius:35,
        height:70,
        width:70,
        marginTop:40,
        alignSelf:'center',
    },
    style_user_input:{
        backgroundColor:'#fff',
        marginTop:10,
        height:45,
    },
    style_pwd_input:{
        backgroundColor:'#fff',
        height:45,
    },
    style_view_commit:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        height:35,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_unlogin:{
        fontSize:12,
        color:'#63B8FF',
        marginLeft:10,
    },
    style_view_register:{
        fontSize:12,
        color:'#63B8FF',
        marginRight:10,
        alignItems:'flex-end',
        flex:1,
        flexDirection:'row',
        textAlign:'right',
    }
});

AppRegistry.registerComponent('hello', () => XuYan);
