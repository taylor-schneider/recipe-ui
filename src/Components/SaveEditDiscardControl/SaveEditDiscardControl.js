import './SaveEditDiscardControl.css';
import React, { setState } from 'react';
import ObserverComponent from '../ObserverComponent';

class SaveEditDiscardControl extends ObserverComponent {

  constructor(props){
    super(props)

    this.state = {
      editMode: false
    }

    this.onEditButtonClick = this.onEditButtonClick.bind(this)
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this)
    this.onDiscardButtonClick = this.onDiscardButtonClick.bind(this)

  }

  onEditButtonClick(event){
    // Prevent the button click from bubbling up to other controls
    // Looking for click events
    // https://stackoverflow.com/questions/38619981/how-can-i-prevent-event-bubbling-in-nested-react-components-on-click
    event.nativeEvent.stopImmediatePropagation();

    this.setState({editMode: true})

    this.sendUpdate({editMode: true})
  };

  onSaveButtonClick(event){
    event.nativeEvent.stopImmediatePropagation();
    let choseYes = window.confirm("Are you sure you want to save this as a new version?")
    if(choseYes){
      alert("Saved!")
    }
    this.setState({editMode: false})

    this.sendUpdate({editMode: false})
  };

  onDiscardButtonClick(event){
    event.nativeEvent.stopImmediatePropagation();
    let choseYes = window.confirm("Are you sure you want to discard the changes and revert to the previous version?")
    if(choseYes){
      alert("Discarded!")
    }
    this.setState({editMode: false})

    this.sendUpdate({editMode: false})
  };

  render(){
    return (
      <div className="SaveEitDiscardControl">
        <button disabled={this.state.editMode} onClick={this.onEditButtonClick}>Edit</button>
        <button disabled={! this.state.editMode} onClick={this.onSaveButtonClick}>Save</button>
        <button disabled={! this.state.editMode} onClick={this.onDiscardButtonClick}>Discard</button>
      </div>
    );
  }
}

export default SaveEditDiscardControl;
