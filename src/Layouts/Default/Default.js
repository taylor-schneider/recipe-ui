import React from 'react';
import './Default.css'

import Header from '../../LayoutObjects/Header/Header';
import Footer from '../../LayoutObjects/Footer/Footer';
import ExpandingPanel from '../../LayoutObjects/ExpandingPanel/ExpandingPanel';
import {Component} from 'react'


// =({children, headerComponents, panelComponents}) =>

class DefaultLayout extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <Header>
                {this.props.headerComponents}
            </Header>
            <ExpandingPanel>
                {this.props.panelComponents}
            </ExpandingPanel>
            <div id="layout-body" className="layout-body">
                {this.props.children}
            </div>
            <Footer />
            </>
        )
    }
}   


export default DefaultLayout;

//            <Link to="/recipe?guid=foobar">Foobar Recipe</Link>
//<div className="layout">
//<div id="header">Header</div>
//{children}
//
//</div>