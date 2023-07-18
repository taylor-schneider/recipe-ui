import React from 'react';
import './GridTest.css';
  
function GridTest (){
    return (
        <div class="wrapper">
        <header class="main-head">The header</header>
        <nav class="main-nav">
            <ul>
            <li><a href="">Nav 1</a></li>
            <li><a href="">Nav 2</a></li>
            <li><a href="">Nav 3</a></li>
            </ul>
        </nav>
        <article class="content">
            <div class="Pane"> 
                <div class="Card">Card</div>
                <div class="Card">Card</div>
                <div class="Card">Card</div>
                <div class="Card">Card</div>
            </div>
            <div class="Pane p2"> 
                <div class="Card c2">Card</div>
                <div class="Card c2">Card</div>
                <div class="Card c2">Card</div>
                <div class="Card c2">Card</div>
            </div>
        </article>
        <footer class="main-footer">The footer</footer>
        </div>
    )
}
  
export default GridTest;