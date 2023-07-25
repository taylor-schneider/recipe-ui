import './RecipeHeader.css';
import React, { setState, Component } from 'react';


class RecipeHeader extends Component {
  
  ResizeObserver = null

  constructor(props){
    super(props)
    this.state = {
      headerTextHeight: 0,
      headerInlineStyle: {},
      ref: React.createRef(null),
      
    }
    this.resizeEventListener = this.resizeEventListener.bind(this)
  }

  resizeEventListener(){

    this.setState({headerTextHeight: this.state.ref.current.clientHeight})

    this.setState({headerInlineStyle: {
      height: this.state.ref.current.clientHeight + 'px',
      width: this.state.ref.current.clientHeight + 'px',
      'maxHeight': this.state.ref.current.clientHeight + 'px',
      'maxWidth': this.state.ref.current.clientHeight + 'px',
      'minHeight': this.state.ref.current.clientHeight + 'px',
      'minWidth': this.state.ref.current.clientHeight + 'px',
    }})
    
  }

  componentDidMount(){
    
    // If we resize the window we will want to resize our component
    window.addEventListener('resize', this.resizeEventListener);

    // We also need some magic to detect when the compnent itself resizes
    // Note: There if text is longer than the screen, the component
    // will change after the render...
    //
    // https://stackoverflow.com/questions/56941843/using-resizeobserver-in-react-class-component
    this.resizeObserver = new ResizeObserver((entries) => {
      this.resizeEventListener()

    });
    this.resizeObserver.observe(this.state.ref.current);
  }


  render(){

    return (
      <div className="RecipeHeader" >
        <div className='header-logo' style={this.state.headerInlineStyle}></div>
        <div className="header-text" ref={this.state.ref}>
          {this.props.recipe.name + " (" + this.props.recipe.version + ")"}
        </div>
      </div>
    );
  }
}

export default RecipeHeader;
