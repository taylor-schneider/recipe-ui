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

  // Create a stateful variable to control whether the component
  // should be visible or not
  const [show, setShow] = useState(false);

  // Create a stateful variable to speficy where the scroll position
  // was on the last scroll event
  const [lastScrollY, setLastScrollY] = useState(0);

  // Create a stateful variable to speficy what css class should be
  // attached to the component
  const [cssClass, setCssClass] = useState("")


  // Define a function to evlauate scroll events and set our local state
  const controlNavbar = () => {
    // IF we dont have a window, dont try anything
    if (typeof window === 'undefined'){
      return;
    }

    // If we have again reached the top of the page, remove the dynamic css
    if(window.scrollY == 0){
      setShow(true);  
      setCssClass("");
      setLastScrollY(window.scrollY); 
      return;
    }

    // If we are scrolling and not at the top of the page, setthe dynamic css
    let scroll_down = window.scrollY > lastScrollY
    if (scroll_down) { 
      setShow(false); 
      setCssClass("hidden");
    } 
    else {
      setShow(true);  
      setCssClass("active")
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

  // Define our side effect function
  function handleScrollEvent(){
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
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
