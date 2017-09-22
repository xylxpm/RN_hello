/**
 * 链接
 */
import React, {Component} from 'react';
import {on, remove} from  './event';
import {setValue, getValue} from  './counter';

export const connector = (name, _Component) => {

    class SimpleEventConnector extends Component {
        constructor(props){
            super(props);
            this.state = {
                data:getValue()
            };

            this.handler = ((data)=>{
                this.setState({
                    data:data
                })
            }).bind(this);
        }


        componentDidMount(){
            on(name,this.handler)
        }
        componentWillUnmount(){
            remove(name,this.handler)
        }

        render(){
            const {data} = this.state;
            return(
               <_Component data={data}/>
            );
        }

    }

    return SimpleEventConnector;

}