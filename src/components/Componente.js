import React, { Component } from "react";
// Componente creado con Clase

// class Componente extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Hello I'm a Componente</h2>
//         <p>{this.props.msg}</p>

//       </div>
//     )
//   }
// }

// componente creado con Function declarada
// function Componente(props) {
//   return (
//     <div>
//       <h2>Hello I'm a Componente Funcional</h2>
//       <p>{props.msg}</p>

//     </div>
//   )
// }

// componente creado con una Funcion Expresada
const Componente = (props) => {
  return <div>
    <h2> {props.msg} </h2>
    {/* <p>{props.msg}</p> */}

  </div>
};
export default Componente;
