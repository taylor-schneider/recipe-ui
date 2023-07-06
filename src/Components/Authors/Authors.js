import './Authors.css';

function Authors(authors, id=null) {

  console.log(authors)
  if(id==null){id="authors"}
  if(authors==null){authors=[]}

  return (
    <div id={id} className="authors">
        {authors.map((author)=>(
          <span>{author}</span>
        ))}
    </div>
  );
}

export default Authors;
