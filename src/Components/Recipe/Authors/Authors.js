import './Authors.css';

function Authors({recipe}) {

  var author_names = []
  var author_text = "Chefs:"

  if(recipe != null && recipe.authors != null){
    for (let i = 0; i < recipe.authors.length; i++) {
      let author = recipe.authors[i]
      author_names.push(<span key={i}>{author}</span>)
    }
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
