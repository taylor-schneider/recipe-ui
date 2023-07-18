import './Panel.css';


// The children variable is a special keyword which is set by the content
// specified between the two JSX tags for this html element
const Panel = ({children, additional_classes}) => {

    return (
        <>
        <div className={"Panel scroll-panel " + additional_classes}>
            {children}
        </div>
        </>
    );
}

export default Panel;

