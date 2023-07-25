import React, { Component, setState } from "react";
import ObserverComponent from '../../Components/ObserverComponent'
import observerMap from '../../Components/ObserverMap'
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import * as ReactDOMClient from 'react-dom/client';




class A extends ObserverComponent{

    constructor(props){
        super(props)
        this.state = {
            text: "A"
        }
        this.foobar = this.foobar.bind(this)
    }

    componentDidMount(){
    }

    foobar(){
        console.log("Sending update")
        this.sendUpdate({text: "hello"})
    }

    render(){
        return (
            <button onClick={this.foobar}>Click Me!</button>
        )
    }
}

class B extends ObserverComponent{
    constructor(props){
        super(props)
        
        this.state = {
            text: "B"
        }    

        
    }

    componentDidMount(){
    }

    render(){
        return (
            <div>{this.state.text}</div>
        )
    }
}


class Test extends Component{

    constructor(props){
        super(props)
    }

    render(){
    
        return (
            <div>
                <A/>
                <B/>
            </div>
        )
    }
}

export default Test