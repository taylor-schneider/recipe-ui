import './Title.css';

function Title(text, id=null) {
  if(id==null){id="title"}
  return (
    <div id={id} className="title">
      <h1>{text}</h1>
    </div>
  );
}

export default Title;
