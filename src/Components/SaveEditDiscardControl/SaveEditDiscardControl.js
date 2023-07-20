import './SaveEditDiscardControl.css';
import React, { useState, useEffect } from 'react';


const SaveEditDiscardControl = () => {

  const [editMode, setEditMode] = useState(false)

  const onEditButtonClick = (event) => {
    setEditMode(true)
  };

  const onSaveButtonClick = (event) => {
    let choseYes = window.confirm("Are you sure you want to save this as a new version?")
    if(choseYes){
      alert("Saved!")
    }
    setEditMode(false)
  };

  const onDiscardButtonClick = (event) => {
    let choseYes = window.confirm("Are you sure you want to discard the changes and revert to the previous version?")
    if(choseYes){
      alert("Discarded!")
    }
    setEditMode(false)
  };

  return (
    <div className="SaveEitDiscardControl">
      <button disabled={editMode} onClick={onEditButtonClick}>Edit</button>
      <button disabled={! editMode} onClick={onSaveButtonClick}>Save</button>
      <button disabled={! editMode} onClick={onDiscardButtonClick}>Discard</button>
    </div>
  );
}

export default SaveEditDiscardControl;
