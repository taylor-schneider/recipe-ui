import './Footer.css';
import React, { useState, useEffect } from 'react';

// This code is largely copied from the header
// See that component for code comments etc.

const Header = () => {

  const [lastScrollY, setLastScrollY] = useState(0);
  const [cssClass, setCssClass] = useState("")

  const scrollEventListener = () => {
    // IF we dont have a window, dont try anything
    if (typeof window === 'undefined'){
      return;
    }

    // If we have again reached the bottom of the page, remove the dynamic css
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
    if(bottom){
      setCssClass("");
      setLastScrollY(window.scrollY); 
      return;
    }

    // If we are scrolling and not at the top of the page, setthe dynamic css
    let scroll_up = window.scrollY < lastScrollY
    if (scroll_up) { 
      setCssClass("footer-hidden");
    } 
    else {
      setCssClass("footer-active")
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

  return (
    <footer className={cssClass}>
      <div className='footer-text'>This is the footer</div>
    </footer>
  );
}

export default Header;
