export default function TabButton(props) {

    function handleClick(){
        console.log('hello world')
    }

    // children prop refers to the content between you tags
    return (
        <li>
            {/* add event listener to handle click events */}
            {/* u need to pass in a function to handle the click */}
            {/* If you using "handleClick()" it will run the function upon loading the page */}
            <button onClick={handleClick}>{props.children}</button>
        </li>
    )
}