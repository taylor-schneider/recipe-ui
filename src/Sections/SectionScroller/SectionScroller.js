import './SectionScroller.css';


// The children variable is a special keyword which is set by the content
// specified between the two JSX tags for this html element
const SectionScroller = ({children, additional_classes}) => {

    return (
        <>
        <div className={"SectionScroller section-scoller " + additional_classes}>
            {children}
        </div>
        </>
    );
}

export default SectionScroller;

