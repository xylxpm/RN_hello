/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Picker组件，基础，进阶内容
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    Picker,
    TouchableOpacity,
    View
} from 'react-native';


var PickerData = [
    '11',
    '22',
    '33',
    '44',
    '55',
    '66'
]
var SecondData = [
    '11a',
    '22a',
    '33a',
    '44a',
    '55a',
    '66a'
]
var ThirdData = [
    '111',
    '222',
    '333',
    '444',
    '555',
    '666'
]

let jsonData = require('./res/allprovinces.json');

/*——————————————————————————————进阶组件：省市列表，json数据源（坑，没弄明白）——————————————————————————————*/

class XuYan_Advanced_Third extends Component {


    static defauleProps={
        selectedProvince :'北京',
        selectedCity:'北京市'
    }

    constructor(props){
        super(props);
        this.state={
            province:[],
            city:[],
            selectedProvince: this.props.selectedProvince,
            selectedCity: this.props.selectedCity
        }
    }

    getProvince(){
        var result=[];
        for(var i in jsonData){
            result.push(jsonData[i].Name)
        }
        return result
    }

    getCity(pname){
        var cityData=[];
        var result=[];
        for(var i in jsonData){
            let temp = jsonData[i].Name;
            if(temp==pname){
                cityData=jsonData[i].Citys;
                for(var j in cityData){
                    result.push(cityData[j].Name)
                }
                break;
            }
        }
        return result
    }

    componentDidMount(){
        var p = this.getProvince();
        this.state.selectedProvince = p[0];

        var c = this.getCity(this.state.selectedProvince)
        this.state.selectedCity = c[0];

        this.setState({
            province:p,
            city:c
        })
        console.log('\n******省: '   + p + '\n******默认省: '  + this.state.selectedProvince)
        console.log('\n******城市: ' + c  + '\n******默认城市: ' + this.state.selectedCity)
    }

    updataP(param){
        var cityData = this.getCity(param);
        let defauleCity = cityData[0];
        this.setState({
            city:cityData,
            selectedProvince: param,
            selectedCity:defauleCity
        })
    }

    updataC(param){
        this.setState({
            selectedCity:param
        })
    }


    renderPicker(key, i) {
        return <Picker.Item label={key} value={key} key={i}/>
    }


    render() {
        return (

            <View style={[styles.flex,styles.margin25]}>

                <Text>省市列表:{this.state.selectedProvince + "  " + this.state.selectedCity }</Text>

                <View style={styles.pickerView}>

                    <Picker style={styles.pickerStyle} selectedValue={this.state.selectedProvince}
                    onValueChange={(obj)=>this.updataP(obj)}>
                        {this.state.province.map((key,i)=>this.renderPicker(key,i))}
                    </Picker>


                    <Picker style={styles.pickerStyle} selectedValue={this.state.selectedCity}
                    onValueChange={(obj)=>this.updataC(obj)}>
                        {this.state.city.map((key,i)=>this.renderPicker(key,i))}
                    </Picker>
                </View>
            </View>

        );
    }
}
/*——————————————————————————————进阶组件：省市列表，json数据源——————————————————————————————*/


/*——————————————————————————————进阶组件：多列——————————————————————————————*/
class XuYan_Advanced_Second extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstPickerValue: PickerData[0],
            secondPickerValue: SecondData[0],
            thirdPickerValue: ThirdData[0]
        };
    }

    upDateFContent(obj) {
        this.setState({
            firstPickerValue: obj
        })
    }


    upDateSContent(obj) {
        this.setState({
            secondPickerValue: obj
        })
    }

    upDateCContent(obj) {
        this.setState({
            thirdPickerValue: obj
        })
    }

    renderPicker(key, i) {
        return <Picker.Item label={key} value={key} key={i}/>
    }

    render() {
        return (
            <View style={[styles.flex,styles.margin25]}>
                <Text>This is a Advanced_Second:{this.state.firstPickerValue + "  " + this.state.secondPickerValue + "  " + this.state.thirdPickerValue}</Text>

                <View style={styles.pickerView}>


                    <Picker style={styles.pickerStyle}
                        selectedValue={this.state.firstPickerValue}
                        onValueChange={(obj) => this.upDateFContent(obj)}
                    >
                        {PickerData.map((key, i) => this.renderPicker(key, i))}
                    </Picker>


                    <Picker style={styles.pickerStyle}
                            selectedValue={this.state.secondPickerValue}
                            onValueChange={(obj) => this.upDateSContent(obj)}>
                        {SecondData.map((key, i) => this.renderPicker(key, i))}
                    </Picker>
                    <Picker style={styles.pickerStyle}
                            selectedValue={this.state.thirdPickerValue}
                            onValueChange={(obj) => this.upDateCContent(obj)}>
                        {ThirdData.map((key, i) => this.renderPicker(key, i))}
                    </Picker>
                </View>
            </View>

        );
    }
}
/*——————————————————————————————进阶组件：多列——————————————————————————————*/


/*——————————————————————————————进阶组件——————————————————————————————*/
class XuYan_Advanced extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstPickerValue: '1',
            secondPickerValue: PickerData[0]
        };
    }

    upDateFContent(obj) {
        this.setState({
            firstPickerValue: obj
        })
    }


    upDateCContent(obj) {
        this.setState({
            secondPickerValue: obj
        })
    }

    renderPicker(key, i) {
        return <Picker.Item label={key} value={key} key={i}/>
    }

    render() {
        return (
            <View style={[styles.flex,styles.margin25]}>
                <Text>This is a Advanced Picker 1:</Text>
                <Text>{this.state.firstPickerValue}</Text>
                <Picker
                    ref='firstPicker'
                    selectedValue={this.state.firstPickerValue}
                    onValueChange={(obj) => this.upDateFContent(obj)}
                >
                    <Picker.Item label='1' value='1'/>
                    <Picker.Item label='2' value='2'/>
                    <Picker.Item label='3' value='3'/>
                    <Picker.Item label='4' value='4'/>
                    <Picker.Item label='5' value='5'/>
                </Picker>

                <Text>This is a Advanced Picker 2:</Text>
                <Text>{this.state.secondPickerValue}</Text>
                <Picker selectedValue={this.state.secondPickerValue}
                        onValueChange={(obj) => this.upDateCContent(obj)}>
                    {PickerData.map((key, i) => this.renderPicker(key, i))}

                </Picker>
            </View>

        );
    }
}
/*——————————————————————————————进阶组件——————————————————————————————*/


/*——————————————————————————————基础组件——————————————————————————————*/
class XuYan_Basics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: null
        };
    }

    render() {
        return (
            <View style={[styles.flex,styles.margin25]}>
                <Text>This is a Picker:</Text>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={lang => this.setState({language:lang})}
                    mode="dialog"
                >
                    <Picker.Item label="Java1" value="Java1"/>
                    <Picker.Item label="Java2" value="Java2"/>
                    <Picker.Item label="Java3" value="Java3"/>
                </Picker>
                <Text>{this.state.language}</Text>
            </View>

        );
    }
}
/*——————————————————————————————基础组件——————————————————————————————*/
const styles = StyleSheet.create({

    flex: {
        flex: 1,
    },
    margin25: {
        marginTop: 25,
    },

    pickerView: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 30
    },
    pickerStyle: {
        flex: 1
    }

});

AppRegistry.registerComponent('hello', () => XuYan_Advanced_Second);
