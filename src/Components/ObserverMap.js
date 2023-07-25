import React, { Component, setState } from "react";


class ObserverMap{
  constructor(){
      this.observees = []
      this.observers = []
      this.register = this.register.bind(this)
      this.sendUpdate = this.sendUpdate.bind(this)
  }

  register(o, type){
      if(type == "observer"){
          this.observers.push(o)
      }
      else if (type == "observee") {
          this.observees.push(o)
      }
  }

  sendUpdate(observee, state){
      this.observers.forEach((observer) => {observer.observeUpdate(observee, state)})
  }
  
}

const observerMap = new ObserverMap()
export default observerMap