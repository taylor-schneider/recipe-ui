import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './Default.css'

const DefaultLayout =({children}) =>{
    return(
        <>

        <div className="layout">
            <div id="header">Header</div>

            {children}
            <div id="footer">Footer</div>
        </div>
        </>
    )
}

export default DefaultLayout;

//            <Link to="/recipe?guid=foobar">Foobar Recipe</Link>
