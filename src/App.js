import logo from "./logo.svg";
import "./App.css";

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
    </div>
  );
}

export default App;
