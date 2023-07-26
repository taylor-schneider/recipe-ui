import './Description.css';
import ObserverComponent from '../../ObserverComponent';
import SaveEditDiscardControl from '../../SaveEditDiscardControl/SaveEditDiscardControl'

class Description extends ObserverComponent {

  constructor(props){
    super(props)

    this.state = {
      editMode: false
    }

    this.observeUpdate = this.observeUpdate.bind(this)
  }

  observeUpdate(sender, state){
    if(sender instanceof SaveEditDiscardControl){
      this.setState(state)
    }
  }

  render(){
    let content = null
    if(! this.state.editMode){
      content = <p>{this.props.recipe.description}</p>
    }
    else {
      content = <textarea>{this.props.recipe.description}</textarea>
    }

    return (
      <div className="Description">
        {content}
      </div>
    );
  }
}

export default Description;
