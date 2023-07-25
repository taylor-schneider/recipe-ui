import './ExpandingPanel.css';
import React, { setState } from 'react';
import ObserverComponent from '../../Components/ObserverComponent';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { object } from 'prop-types';

// I used the following article to understand how swiping works
// https://stackoverflow.com/questions/70612769/how-do-i-recognize-swipe-events-in-react

class ExpandingPanel extends ObserverComponent {

  resizeObserver = null

  constructor(props){
    super(props)

    this.state = {
      // State related to swiping
      touchStart: null,
      touchEnd: null,
      minSwipeDistance: 50,
      // State related to double clicking
      lastClickTime: null,
      // The css class attached when panel (shown by default)
      cssClass: "ExpandingPanel-visible",
      // The inline css attached to the component when header is resized
      headerHeight: 0,
      footerHeight: 0,
      inlineCss: {},
    }

    this.onTouchStart = this.onTouchStart.bind(this)
    this.onTouchMove = this.onTouchMove.bind(this)
    this.onTouchEnd = this.onTouchEnd.bind(this)
    this.onDoubleClick = this.onDoubleClick.bind(this)
    this.observeUpdate = this.observeUpdate.bind(this)
  }


  onTouchStart(e) {
    this.setState({touchEnd: null}) // otherwise the swipe is fired even with usual touch events
    this.setState({touchStart: e.targetTouches[0].clientX})
  }

  onTouchMove(e){
    this.setState({touchEnd: e.targetTouches[0].clientX})
  }

  onTouchEnd(e){
    // Do nothing if...
    if (!this.state.touchStart || !this.state.touchEnd) {
      return
    }
    // Determine what type of swipe has occurred
    const distance = this.state.touchStart - this.state.touchEnd
    const isLeftSwipe = distance > this.state.minSwipeDistance
    const isRightSwipe = distance < - this.state.minSwipeDistance
    //if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')

    // Handle the events
    if(isRightSwipe) {
      this.setState({cssClass: "ExpandingPanel-visible"})
    }
    if(isLeftSwipe) {
      this.setState({cssClass: "ExpandingPanel-hidden"})
    }
  }

  onDoubleClick(e) {
    
    // Check if we have had a click before
    let now = Date.now()
    if (this.state.lastClickTime == null){
      this.setState({lastClickTime: now})
      return
    }
    // Check if this click is less than one second since the previous one
    else {
      let diff = (now - this.state.lastClickTime) / 1000
      let threshold = 0.5
      if (diff < threshold){
        this.setState({lastClickTime: now})
      }
      else
      {
        console.log("too slow")
        console.log(diff)
      }
    }
    // If we got here, its a double click...
    // Toggle the css
    if(this.state.cssClass == 'ExpandingPanel-visible'){
      this.setState({cssClass: "ExpandingPanel-hidden"})
    }
    else {
      this.setState({cssClass: "ExpandingPanel-visible"})
    }
    this.setState({lastClickTime: null})
  }
  

  observeUpdate(sender, state){

    // Pull out any information that is relevant
    if(sender instanceof  Header){
      this.setState({headerHeight: state.clientHeight})
    }
    else if(sender instanceof Footer){
      this.setState({footerHeight: state.clientHeight})
    }
    else {
      return
    }

    // Update the inline css with the new values
    let vh100 = window.innerHeight
    let newHeight = vh100 - this.state.headerHeight - this.state.footerHeight

    this.setState({
      inlineCss: {
        top: this.state.headerHeight + "px",
        height: newHeight + "px"
      }
    })
    console.log(this.state.inlineCss)
  }

  render(){
    return (
      <div 
        className={'ExpandingPanel ' + this.state.cssClass} 
        onTouchStart={this.onTouchStart} 
        onTouchMove={this.onTouchMove} 
        onTouchEnd={this.onTouchEnd}
        onClick={this.onDoubleClick}
        style={this.state.inlineCss}>
          {this.props.children}
      </div>
    );
  }
}

export default ExpandingPanel;
