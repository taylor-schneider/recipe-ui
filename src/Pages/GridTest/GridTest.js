import React from 'react';
import './GridTest.css';
import { useEffect, useState } from 'react';

// In this example, if there is an incongruent number of cards (ie a number that doesnt fit the css),
// the last one should be marked and the css will know how to handle
// Can use conditional css based on the number of available items

function GridTest (){

    return (
        <div className="wrapper">
            <header id='navbar' className="main-head">
                <div className="logo-img"></div>
                <div>Header Text</div>
            </header>
            <nav className="main-nav">
                <ul>
                <li><a href="">Nav 1</a></li>
                <li><a href="">Nav 2</a></li>
                <li><a href="">Nav 3</a></li>
                </ul>
            </nav>
            <div className="content">
                <div className="Pane"> 
                    <div className="Card">Card</div>
                    <div className="Card">Card</div>
                    <div className="Card sp">Card</div>
                </div>
                <div className="Pane p2"> 
                    <div className="Card c2">Card</div>
                    <div className="Card c2">Card</div>
                    <div className="Card c2">Card</div>
                    <div className="Card c2">Card</div>
                </div>
            </div>
            <footer className="main-footer">The footer</footer>
        </div>
    )
}
  
export default GridTest;