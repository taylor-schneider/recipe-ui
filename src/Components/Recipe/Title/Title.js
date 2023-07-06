import './Title.css';
import Version from '../Version/Version'


function Title(recipe, id=null) {
  if(id==null){id="title"}
  var contents = []
  if(recipe != null){
    contents.push(<h1>{recipe.name}</h1>)
    contents.push(Version(recipe))
  }
  return (
    <div id={id} className="title">
      {contents}
    </div>
  );
}

export default Title;
