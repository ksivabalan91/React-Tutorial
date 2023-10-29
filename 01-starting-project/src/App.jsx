// import the image into the file
import reactImg from './assets/react-core-concepts.png'
import componentImg from "./assets/components.png"

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return (Math.floor(Math.random() * (max + 1)))
}

function Header() {
  const description = getRandomInt(2);
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[description]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      {/* You can use the following </> syntax if there is no additional classes and 
      chilren inside the tag*/}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* pass in values to your component via props, you can pass in anything
            including objects and arrays */}
            <CoreConcept 
            title="Components" 
            description="the core UI building blocks"
            image={componentImg}
            />
            <CoreConcept 
            title="Components" 
            description="the core UI building blocks"
            image={componentImg}
            />
            <CoreConcept 
            title="Components" 
            description="the core UI building blocks"
            image={componentImg}
            />
            <CoreConcept 
            title="Components" 
            description="the core UI building blocks"
            image={componentImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
