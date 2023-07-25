import React, { Component, setState } from "react";
import observerMap from '../Components/ObserverMap'

class ObserverComponent extends Component{

    constructor(props){
        super(props)

        observerMap.register(this, "observer")

        this.sendUpdate = this.sendUpdate.bind(this)
        this.observeUpdate = this.observeUpdate.bind(this)
    }

    sendUpdate(state){
        observerMap.sendUpdate(this, state)
    }

    observeUpdate(observee, state){
        //console.log("Received update from", observee)
        this.setState(state)
    }
}

export default ObserverComponent;