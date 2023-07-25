import './Footer.css';
import React, { setState } from 'react';
import ObserverComponent from '../../Components/ObserverComponent';
// This code is largely copied from the header
// See that component for code comments etc.

class Footer extends ObserverComponent{

  constructor(props){
    super(props)

    this.state = {
      lastScrollY: 0,
      cssClass: "",
      ref: React.createRef()
    }

    window.addEventListener('scroll', this.scrollEventListener);
  }

  scrollEventListener(){

    // IF we dont have a window, dont try anything
    if (typeof window === 'undefined'){
      return;
    }
    // If we have again reached the bottom of the page, remove the dynamic css
    //https://stackoverflow.com/questions/63501757/check-if-user-reached-the-bottom-of-the-page-react
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
    if(bottom){
      this.setState({cssClass: ""});
      this.setState({lastScrollY: window.scrollY}); 
      return;
    }

    // If we are scrolling and not at the top of the page, setthe dynamic css
    let scroll_up = window.scrollY < this.state.lastScrollY
    if (scroll_up) { 
      this.setState({cssClass: "Footer-hidden"});
    } 
    else {
      this.setState({cssClass: "Footer-active"})
    }

    // remember current page location to use in the next move
    this.setState({lastScrollY: window.scrollY}); 
    
  };

  componentDidMount(){
    let currentHeight = this.state.ref.current.clientHeight
    this.sendUpdate({clientHeight: currentHeight})
  }
  
  render(){
    return (
      <div ref={this.state.ref} className={"Footer " +this.state.cssClass}>
        <div className='Footer-text'>This is the footer</div>
      </div>
    );
    }
}

export default Footer;
