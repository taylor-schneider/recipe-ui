import React from 'react';
import './Default.css'

import Header from '../../LayoutObjects/Header/Header';
import Footer from '../../LayoutObjects/Footer/Footer';
import ExpandingPanel from '../../LayoutObjects/ExpandingPanel/ExpandingPanel';

const DefaultLayout =({children, panelComponents}) =>{
    return(
        <>
        <Header/>
        <ExpandingPanel>
            {panelComponents}
        </ExpandingPanel>
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