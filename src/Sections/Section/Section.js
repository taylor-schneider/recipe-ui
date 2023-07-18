import './Section.css';

function Section({components}, additional_classes) {

  if(components == null){
    return <div>Empty Section</div>
  }

  return (
    <div className={"Section scroll-section" + additional_classes}>
      {components}
    </div>
  );
}

export default Section;

