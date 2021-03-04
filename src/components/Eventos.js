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
