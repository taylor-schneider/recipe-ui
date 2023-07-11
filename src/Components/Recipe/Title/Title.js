import './Title.css';
import Version from '../Version/Version'


function Title(recipe) {
  var contents = []
  if(recipe != null){
    contents.push(<h1>{recipe.name}</h1>)
    contents.push(Version(recipe))
  }
  return (
    <div className="Title">
      {contents}
    </div>
  );
}

export default Title;
