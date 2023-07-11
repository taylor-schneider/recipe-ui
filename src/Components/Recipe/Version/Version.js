import './Version.css';

function Version(recipe) {
  console.log("version")
  console.log(recipe)
  var contents = null
  if(recipe != null){
    contents = (
      <span className="Version">
        {recipe.version}
      </span>
    )
  }

  return contents;
}

export default Version;
