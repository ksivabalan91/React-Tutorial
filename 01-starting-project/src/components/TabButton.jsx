export default function TabButton(props) {
    // children prop refers to the content between you tags
    return (
        <li><button>{props.children}</button></li>
    )
}