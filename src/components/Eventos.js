import React, { Component } from 'react';

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    }
    // React nos recomienda bindear en el constructor para enlazar el THIS
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }
  sumar(e) {
    // console.log("Sumando")
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    })
  }
  restar(e) {
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    })
  }
  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    )
  }
}

// Eventos % Property Initializers
export class EventosES7 extends Component {
  // ya no será necesario el constructor para bindear porque 
  // las arrow function ya heredan el this
  state = {
    contador: 0,
  }
  //  Arrow Function
  sumar = (e) => {
    // console.log("Sumando")
    console.log(this)
    this.setState({
      contador: this.state.contador + 1,
    })
  }
  restar = (e) => {
    console.log(this)
    this.setState({
      contador: this.state.contador - 1,
    })
  }
  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    )
  }
}


/*
function Boton(props){
  return(
    <button onClick={props.myOnClick}>Boton hecho en un componente</button>
  )
}
*/

// arrow function
/*
const Boton=(props)=>(<button onClick={props.myOnClick}>Boton hecho en un componente</button>);
*/

// destructuracion
const Boton=({myOnClick})=>(<button onClick={myOnClick}>Boton hecho en un componente</button>)

export class MasSobreEventos extends Component {
  handleClick=(e,message)=>{
    console.log(e);
    // mostrará el evento nativo
    console.log(e.nativeEvent)
    console.log(e.target)
    console.log(e.nativeEvent.target)
    console.log(message)
  }
  render(){
    return(
      <div>
        <h2>Más sobre Eventos</h2>
        {/* paso de Parametros usando el manejador de eventos */}
        <button onClick={(e)=>this.handleClick(e,"Hola pasando parametro desde un evento")}>Click me</button>
        {/* el evento no funcionará porque no es un elemento JSX */}
        <Boton onClick={(e)=>this.handleClick(e,"Hola pasando parametro desde un evento")}></Boton>
        {/* para que funcione tendremos que realizar Evento Personalizado */}
        <Boton myOnClick={(e)=>this.handleClick(e,"Hola pasando parametro desde un evento")}></Boton>
      </div>
    )
  }
}