import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
    console.log("");
  }
  // Lo utilizaremos para eleminiar el componente Reloj
  // al renderizar se eliminará del DOM
  componentWillUnmount() {
    // console.log(3, "El componente RELOJ ha sido eliminado del DOM");
  }

  render() {
    return (
      <h3>{this.props.hora}</h3>
    )
  }
}
export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    // console.log(0, "El componente se Inicializa, aún no está en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible:false,
    }

    this.temporizador = null;
  };

  // El método componentDidMount() se ejecuta después que
  //  la salida del componente ha sido renderizada en el DOM.
  //  Este es un buen lugar para configurar un temporizador:
  componentDidMount() {
    // console.log(1, "El estado o la props del componente han cambiado");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(2, "El componente se está renderizando")
    console.log(prevProps);
    console.log(prevState);//devolverá el estado anterior
  }

  componentWillUnmount() {
    // console.log(3, "Se ejecutará cuando el componente se elimina")
  }
  tictac = (e) => {
    this.temporizador = setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() })
    }, 1000)
  };
  iniciar = (e) => {
    this.tictac();
    this.setState({visible:true});
  };
  detener = (e) => {
    clearInterval(this.temporizador);
    this.setState({visible:false});
  };

  render() {
    // console.log(4, "El componente se redibuja por algún cambio en el DOM")
    return (
      <div>
        <h2>Ciclo de Vida de los componentes de clase</h2>

        {this.state.visible && <Reloj hora={this.state.hora}></Reloj>}
        {/* <h3>{this.state.hora}</h3> */}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </div>
    )
  }
}