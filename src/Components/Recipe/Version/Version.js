import './Version.css';

function Version(recipe, id=null) {
  console.log("version")
  console.log(recipe)
  var contents = null
  if(recipe != null){
    contents = (
      <span id="version" className="version">
        {recipe.version}
      </span>
    )
  }

  return contents;
}

export default Version;
