import './RecipeHeader.css';
import React, { useState, useEffect, useRef } from 'react';


function RecipeHeader({recipe}) {
  
  // Wire up some side-effect to automatically adjust the css for this component
  const [headerTextHeight, setHeaderTextHeight] = useState(0)
  const [headerInlineStyle, setHeaderInlineStyle] = useState({})
  const ref = useRef(null)

  const setCss = () => {

    setHeaderTextHeight(ref.current.clientHeight)

    setHeaderInlineStyle({
      height: ref.current.clientHeight + 'px',
      width: ref.current.clientHeight + 'px',
      'max-height': ref.current.clientHeight + 'px',
      'max-width': ref.current.clientHeight + 'px',
      'min-height': ref.current.clientHeight + 'px',
      'min-width': ref.current.clientHeight + 'px',
    })
  }

  const eventListener = () => {
    
    if (typeof window === 'undefined'){
      return;
    }
    
    setCss()
  }
  function cleanupEventHandler(){
    window.removeEventListener('resize', eventListener);
  }
  function handleEvent(){
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', eventListener);
      // cleanup function
      return cleanupEventHandler
    }
  }

  // Wire up the side effect
  useEffect(handleEvent, [headerTextHeight]);

  return (
    <div className="RecipeHeader" >
      <div className='header-logo' style={headerInlineStyle}></div>
      <div className="header-text" ref={ref}>
        {recipe.name + " (" + recipe.version + ")"}
      </div>
    </div>
  );
}

export default RecipeHeader;
