import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './Default.css'

const DefaultLayout =({children}) =>{
    return(
        <>
        <div id="header">Header</div>
        <div id="layout-body" className="layout-body">
            {children}
        </div>
        <div id="footer">Footer</div>
        </>
    )
}

export default DefaultLayout;

//            <Link to="/recipe?guid=foobar">Foobar Recipe</Link>
//<div className="layout">
//<div id="header">Header</div>
//{children}
//
//</div>