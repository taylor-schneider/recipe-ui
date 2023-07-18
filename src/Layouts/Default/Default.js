import React from 'react';
import './Default.css'

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


const DefaultLayout =({children}) =>{
    return(
        <>
        <Header/>
        <div id="navigation">Navigation</div>
        <div id="layout-body" className="layout-body">
            {children}
        </div>
        <Footer />
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