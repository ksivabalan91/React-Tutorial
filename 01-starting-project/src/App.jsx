// import the image into the file
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  function handleSelect(selectedButton) {
    // selectedButton => 'components','JSX','props','state'
    console.log(selectedButton)
  }
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
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          {/* pass in a function to handle on click events in our custom component */}
          <menu>
            {/* by passing in an arrow function  */}
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
