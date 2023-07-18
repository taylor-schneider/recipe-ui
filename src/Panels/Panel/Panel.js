import './Panel.css';

function Panel({sections}, additional_classes) {

if(sections == null){
    return <div>Empty Panel</div>
    }

  return (
    <div className="Pannel scroll-panel">
        {sections}
    </div>
  );
}

export default Panel;

