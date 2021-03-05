import React, { Component } from "react";
export default class Padre extends Component{
  state = {
    contador:0
  }

  incrementarContador=(e)=>{
    this.setState({contador:this.state.contador+1})
  }
  render(){
    return(
      <div>
        <h2>Comunicación entre Componentes</h2>
        <p>Contador: <b>{this.state.contador}</b></p>
        {/* para que el hijo pueda manipular al padre
          tendrémos que asignarle como propiedad el evento al hijo
        */}
        <Hijo incrementarContador={this.incrementarContador} message="Mensaje Hijo 1"></Hijo>
        <Hijo incrementarContador={this.incrementarContador} message="Mensaje Hijo 2"></Hijo>
      </div>
    )
  }
}
function Hijo(props) {
  return (
    <>
      <h3>{props.message}</h3>
      <button onClick={props.incrementarContador}>+</button>
    </>
  )
}