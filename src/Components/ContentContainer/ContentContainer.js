import './ContentContainer.css';


function ContentContainer({children}) {

  return (
    <div className="ContentContainer">
      {children}
    </div>
  );
}

export default ContentContainer;
