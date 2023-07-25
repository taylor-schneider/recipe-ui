import './Header.css';
import React, { useState, useEffect } from 'react';
import ObserverComponent from '../../Components/ObserverComponent';

class Header extends ObserverComponent {

  constructor(props){

    super(props)

    this.state = {
      lastScrollY: 0,
      cssClass: "",
      ref: React.createRef(),
      clientHeight: 0
    }

    this.scrollEventListener = this.scrollEventListener.bind(this)
    this.resizeEventListender = this.resizeEventListender.bind(this)
  }

  // Define a callback function to dynamically set the css class 
  // for this component based on logic related to scrolling
  scrollEventListener() {
    // IF we dont have a window, dont try anything
    if (typeof window === 'undefined'){
      return;
    }

    // If we have again reached the top of the page, remove the dynamic css
    if(window.scrollY == 0){
      this.setState({cssClass: ""});
      this.setState({lastScrollY: window.scrollY}); 
      return;
    }

    // If we are scrolling and not at the top of the page, setthe dynamic css
    let scroll_down = window.scrollY > this.state.lastScrollY
    if (scroll_down) { 
      this.setState({cssClass: "header-hidden"});
    } 
    else {
      this.setState({cssClass: "header-active"});
    }

    // remember current page location to use in the next move
    this.setState({lastScrollY: window.scrollY}); 
    
  };

  // Define a callback function to update observers if this component's
  // height changes
  resizeEventListender() {
    this.setState({clientHeight: this.state.ref.current.clientHeight})
    this.sendUpdate({clientHeight: this.state.ref.current.clientHeight})
  }

  componentDidMount(){
    window.addEventListener('scroll', this.scrollEventListener);
    window.addEventListener('resize', this.resizeEventListender);

    let currentHeight = this.state.ref.current.clientHeight
    this.setState({clientHeight: currentHeight})
    this.sendUpdate({clientHeight: currentHeight})
  }

  render() {
    return (
      <header ref={this.state.ref} className={this.state.cssClass}>
        {this.props.children}
      </header>
    );
  }
}

export default Header;
