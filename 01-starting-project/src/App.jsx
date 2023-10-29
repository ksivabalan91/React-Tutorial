const reactDescriptions = ['Fundamental','Crucial','Core'];

function getRandom(max){
  return (Math.floor(Math.random()*(max+1)))
}

function Header() {

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandom(3)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}
function App() {
  return (
    <div>
      {/* You can use the following </> syntax if there is no additional classes and 
      chilren inside the tag*/}
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
