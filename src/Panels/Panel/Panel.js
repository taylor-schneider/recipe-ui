import './Panel.css';

function Panel(sections, additional_classes) {

//    if(sections == null) {
//        return <div>Empty Panel</div>
//      }

    console.log(sections)
    console.log(additional_classes)


    return (

        
        <div className={"Pannel scroll-panel" + additional_classes}>
            {sections}
        </div>
    );
}

export default Panel;

