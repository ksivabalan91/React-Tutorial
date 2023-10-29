import reactImg from '../../assets/react-core-concepts.png'
import "./Header.css"

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
    return (Math.floor(Math.random() * (max + 1)))
}

export default function Header() {
    const description = getRandomInt(2);
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {reactDescriptions[description]}
            </p>
        </header>
    )
}