// import react ya no es necesario apartir de la version 17
import react from 'react';
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import {EventosES6, EventosES7,MasSobreEventos} from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApi from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScroollHooks from "./components/ScroolHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';

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
      <hr></hr>
      <section>
        <Componente msg="hola soy un Componente en una Función expresada desde una prop"></Componente>
      </section>
      <hr></hr>
      <section>
        <Propiedades
          cadena="Esto es una cadena de texto"
          numero={28}
          booleano={true}
          arreglo={[1,2,3,4]}
          objeto={{nombre:"victor",apellido:"contreras"}}
          funcion={(num)=>num*num}
          elementoReact={<i>This is a ElementoReact</i>}
          componenteReact={<Componente msg="Un componente desde una prop"></Componente>}
        />
      </section>
      <hr></hr>
      <Estado></Estado>
      <hr></hr>
      <RenderizadoCondicional></RenderizadoCondicional>
      <hr></hr>
      <RenderizadoElementos></RenderizadoElementos>
      <hr></hr>
      <EventosES6></EventosES6>
      <EventosES7></EventosES7>
      <MasSobreEventos></MasSobreEventos>
      <hr></hr>
      <ComunicacionComponentes></ComunicacionComponentes>
      <hr></hr>
      <CicloVida></CicloVida>
      <hr></hr>
      <AjaxApi></AjaxApi>
      <hr></hr>
      <ContadorHooks></ContadorHooks>
      <hr></hr>
      <ScroollHooks></ScroollHooks>
      <hr></hr>
      <RelojHooks></RelojHooks>
      <hr></hr>
      <AjaxHooks></AjaxHooks>
      <hr></hr>
      <HooksPersonalizados></HooksPersonalizados>
      <hr></hr>
      <Referencias></Referencias>
    </div>
  );
}

export default App;
