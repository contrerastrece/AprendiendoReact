import React, { Component } from "react";
// importamos nuestra Data
import Data from "../helpers/data.json";
function ListasFrameworks(props){
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noreferrer">{props.el.name}</a>
    </li>
  )
}
export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons:["Primavera","Verano","Invierno","Ontoño"],
    }
  }
  render() {
    return (
      <div>
        <h2>Renderizado Elementos</h2>
        <h3>Estaciones del Año</h3>
          <ul>
            {/* al hacer eso nos saldrá un error porque no tiene Key */}
            {/* {this.state.seasons.map(el=><li>{el}</li>)} */}

            {/* Utilizaremos Key para que desapareza el Error */}
            {this.state.seasons.map(el=><li key={el.toString()}>{el}</li>)}
          </ul>
        <h3>Frameworks de Js para Frontend</h3>
        <ul>
          {
            Data.frameworks.map((el)=><ListasFrameworks key={el.id} el={el}></ListasFrameworks>)
          }
        </ul>
        
      </div>
    );
  }
}
