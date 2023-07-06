import './Authors.css';

function Authors(recipe) {

  var author_names = []
  var author_text = "Chefs:"

  if(recipe != null && recipe.authors != null){
    {recipe.authors.map((author)=>(
      author_names.push(<span>{author}</span>)
    ))}
    if(recipe.authors.length == 1){
      author_text = "Chef:"
    }
  }

  return (
    <div className="Authors">
      <span>{author_text}</span>{author_names}
    </div>
  );
}

export default Authors;
