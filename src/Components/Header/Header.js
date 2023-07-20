import './Header.css';
import React, { useState, useEffect } from 'react';


const Header = () => {

  // useState is React Hook that allows you to add state to a 
  // functional component. It returns an array with two values: 
  // the current state and a function to update it. 
  // The Hook takes an initial state value as an argument and 
  // returns an updated state value whenever the updater function 
  // is called. 
  // https://blog.logrocket.com/guide-usestate-react

  // Create a stateful variable to speficy where the scroll position
  // was on the last scroll event
  const [lastScrollY, setLastScrollY] = useState(0);

  // Create a stateful variable to speficy what css class should be
  // attached to the component
  const [cssClass, setCssClass] = useState("")


  // Define a function to evlauate scroll events and set our local state
  const scrollEventListener = () => {
    // IF we dont have a window, dont try anything
    if (typeof window === 'undefined'){
      return;
    }

    // If we have again reached the top of the page, remove the dynamic css
    if(window.scrollY == 0){
      setCssClass("");
      setLastScrollY(window.scrollY); 
      return;
    }

    // If we are scrolling and not at the top of the page, setthe dynamic css
    let scroll_down = window.scrollY > lastScrollY
    if (scroll_down) { 
      setCssClass("header-hidden");
    } 
    else {
      setCssClass("header-active")
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
    
  };

  // The useEffect hook like the useState hook is another core hook added
  // to the react library in 2018. The word effect refers to a functional 
  // programming term called a "side effect". We perform a side effect 
  // when we need to reach outside of our React components to do something. 
  // Side effects provide performance gains compared to OOP methods of class
  // components. The function passed to useEffect is a callback function. 
  // This will be called after the component renders. The second argument 
  // is an array, called the dependencies array. This array should include 
  // all of the values that our side effect relies upon.
  // The final part of performing side effects properly in React is the 
  // effect cleanup function. Sometimes our side effects need to be shut off
  // and this is preformed by the cleanup function. To use the cleanup function, 
  // we need to return a function from within the useEffect function.
  //
  // https://www.freecodecamp.org/news/react-useeffect-absolute-beginners/

  // Define our side effect function and cleanup function
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

  // Wire up the side effect
  useEffect(handleScrollEvent, [lastScrollY]);

  return (
    <header className={cssClass}>
      <div className='header-logo'></div>
      <div className='header-text'>This is the header</div>
    </header>
  );
}

export default Header;
