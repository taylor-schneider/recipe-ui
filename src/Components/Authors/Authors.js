import './Authors.css';

function Authors(authors, id=null) {
  if(id==null){id="authors"}
  return (
    <div id={id} className="authors">
      {authors.map((author)=>(
        <spane>author</spane>
      ))}
    </div>
  );
}

export default Title;
