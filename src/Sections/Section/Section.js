import './Section.css';

// We use the {} around components because it is an array of components and react doesnt like it
const Section = ({children, additional_classes}) => {

  console.log(children)
  console.log(additional_classes)

  return (
    <div className={"Section scroll-snap-align-start " + additional_classes}>
      {children}
    </div>
  );
}

export default Section;

