import './PanelScroller.css';


// The children variable is a special keyword which is set by the content
// specified between the two JSX tags for this html element
const PanelScroller = ({children, additional_classes}) => {

    return (
        <>
        <div className={"PanelScroller panel-scoller " + additional_classes}>
            {children}
        </div>
        </>
    );
}

export default PanelScroller;

