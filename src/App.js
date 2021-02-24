// import react ya no es necesario apartir de la version 17
import react from 'react';
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";

function App() {
  let nombre="VContreras";
  let user={
    name:"victor",
    firstName:"Contreras",
    lastName:"Pariona"
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {nombre} 😎!</h1>
        <p>{user.lastName}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
      </header>
      <section>
        <Componente msg="hola soy un Parrafo desde una prop"></Componente>
      </section>
    </div>
  );
}

export default App;
