/**
 * 使用webView
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    WebView,
    Dimensions,
    Platform
} from 'react-native';


const URL = 'http://www.baidu.com';


var BGWASH = 'rgba(255,255,255,0.8)';
var DISABLED_WASH = 'rgba(255,255,255,0.25)';
var TEXT_INPUT_REF = 'urlInput';
var WEBVIEW_REF = 'webview';

class WebViewDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: URL,
            status: 'No Page Loaded',
            backButtonEnabled: false,
            forwardButtonEnabled: false,
            loading: true,
            scalesPageToFit: true,
        }
    }

    inputText = '';

    goBack = () => {
        this.refs[WEBVIEW_REF].goBack();
    }

    goForward = () => {
        this.refs[WEBVIEW_REF].goForward();
    }

    onSubmitEditing = (event) => {
        this.pressGoButton()
    }

    handleTextInputChange = (event) => {
        var url = event.nativeEvent.text;
        if (!/^[a-zA-Z-_]+:/.test(url)) {
            url = 'http://' + url;
        }
        this.inputText = url;
    }

    reload=()=>{
        this.refs[WEBVIEW_REF].reload();
    }

    pressGoButton = () => {
        var url = this.inputText.toLowerCase();
        if(url==this.state.url){
            this.reload()
        }else{
            this.setState({
                url:url
            })
        }
        this.refs[TEXT_INPUT_REF].blur();
    }

    onNavigationStateChange = (navState) => {
        this.setState({
            backButtonEnabled:navState.canGoBack,
            forwardButtonEnabled:navState.canGoForward,
            url:navState.url,
            status:navState.title,
            loading:navState.loading,
            scalesPageToFit:true
        })
    }

    onShouldStartLoadWithRequest = (event) => {
        return true;
    }

    render() {

        this.inputText = this.state.url;

        return (
            <View style={styles.container}>
                <View style={styles.addressBarRow}>
                    <TouchableOpacity style={this.state.backButtonEnabled?styles.navButtom:styles.disablesButtom}
                                      onPress={this.goBack.bind(this)}>
                        <Text>{'<'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.backButtonEnabled?styles.navButtom:styles.disablesButtom}
                                      onPress={this.goForward.bind(this)}>
                        <Text>{'>'}</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.addressBarTextInput}
                        ref={TEXT_INPUT_REF}
                        autoCapitalize='none'
                        defaultValue={this.state.url}
                        onSubmitEditing={this.onSubmitEditing.bind(this)}
                        onChange={this.handleTextInputChange.bind(this)}
                        clearButtonMode='while-editing'
                        underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity style={styles.goButton} onPress={this.pressGoButton.bind(this)}>
                        <Text>GO!</Text>
                    </TouchableOpacity>
                </View>


                <WebView
                    ref={WEBVIEW_REF}
                    style={styles.webView}
                    source={{uri:URL,method:'get'}}
                    automaticallyAdjustContentInsets={false}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate='normal'
                    onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest.bind(this)}
                    startInLoadingState={true}
                    scalesPageToFit={this.state.scalesPageToFit}


                />
                <View style={styles.statusBar}>
                    <Text style={styles.statusBarText}>{this.state.status}</Text>
                </View>
            </View>
        )
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#40C4FF',
        paddingTop: Platform.OS === 'ios' ? 20 : 0
    },
    addressBarRow: {
        flexDirection: 'row',
        padding: 8
    },
    webView: {
        backgroundColor: BGWASH,
        height: 350
    },
    addressBarTextInput: {
        backgroundColor: BGWASH,
        borderColor: 'transparent',
        borderRadius: 3,
        borderWidth: 1,
        height: 24,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 3,
        flex: 1,
        fontSize: 14
    },
    navButtom: {
        width: 20,
        padding: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BGWASH,
        borderColor: 'transparent',
        borderRadius: 3,
    },
    disablesButtom: {
        width: 20,
        padding: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DISABLED_WASH,
        borderColor: 'transparent',
        borderRadius: 3
    },
    statusBarText: {
        color: 'white',
        fontSize: 13,
    },
    goButton: {
        height: 24,
        padding: 3,
        marginLeft: 8,
        alignItems: 'center',
        borderColor: 'transparent',
        borderRadius: 3,
        alignSelf: 'stretch'
    },
    statusBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        height: 22
    },
    spinner: {
        width: 20,
        marginRight: 6
    },
    buttons: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 0.5,
        width: 0,
        marginLeft: 5,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'gray'
    }
});

export default WebViewDemo;
