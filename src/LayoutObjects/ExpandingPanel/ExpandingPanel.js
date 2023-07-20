import './ExpandingPanel.css';
import React, { useState, useEffect } from 'react';

// This code is largely copied from the header
// See that component for code comments etc.

const ExpandingPanel = ({children}) => {

  // We will look for scroll events and swipe events

  /*
  const [lastScrollY, setLastScrollY] = useState(0);
  const [cssClass, setCssClass] = useState("")

  const scrollEventListener = () => {
    // IF we dont have a window, dont try anything
    if (typeof window === 'undefined'){
      return;
    }

    // If we have again reached the bottom of the page, remove the dynamic css
    //https://stackoverflow.com/questions/63501757/check-if-user-reached-the-bottom-of-the-page-react
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
    if(bottom){
      setCssClass("");
      setLastScrollY(window.scrollY); 
      return;
    }

    // If we are scrolling and not at the top of the page, setthe dynamic css
    let scroll_down = window.scrollY > lastScrollY
    if (scroll_down) { 
      setCssClass("navigation-hidden");
    } 
    else {
      setCssClass("navigation-active")
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
    
  };
  function cleanupScrollEventHandler(){
    window.removeEventListener('scroll', scrollEventListener);
  }
  function handleScrollEvent(){
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', scrollEventListener);

      // cleanup function
      return cleanupScrollEventHandler
    }
  }
  useEffect(handleScrollEvent, [lastScrollY]);
  */

  // https://stackoverflow.com/questions/70612769/how-do-i-recognize-swipe-events-in-react
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [cssClass, setCssClass] = useState("")

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50 

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    // Do nothing if...
    if (!touchStart || !touchEnd) {
      return
    }
    // Determine what type of swipe has occurred
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    //if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')

    // Handle the events
    if(isRightSwipe) {
      setCssClass("ExpandingPanel-visible")
    }
    if(isLeftSwipe) {
      setCssClass("ExpandingPanel-hidden")
    }
  }

  // Define function to handle double clicks
  const [lastClickTime, setLastClickTime] = useState(null)

  const onDoubleClick = (event) => {
    
    // Check if we have had a click before
    let now = Date.now()
    if (lastClickTime == null){
      setLastClickTime(now)
      return
    }
    // Check if this click is less than one second since the previous one
    else {
      let diff = (now - lastClickTime) / 1000
      let threshold = 0.5
      if (diff > threshold){
        setLastClickTime(now)
        return
      }
    }
    // If we got here, its a double click...
    // Toggle the css
    if(cssClass == 'ExpandingPanel-visible'){
      setCssClass("ExpandingPanel-hidden")
    }
    else {
      setCssClass("ExpandingPanel-visible")
    }
    setLastClickTime(null)
  }
  

  return (
    <div 
      className={'ExpandingPanel ' + cssClass} 
      onTouchStart={onTouchStart} 
      onTouchMove={onTouchMove} 
      onTouchEnd={onTouchEnd}
      onClick={onDoubleClick}>
        {children}
    </div>
  );
}

export default ExpandingPanel;
