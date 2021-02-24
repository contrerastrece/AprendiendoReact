import React, { Component } from "react";

class Componente extends Component {
  render() {
    return (
      <div>
        <h2>Hello I'm a Componente</h2>
        <p>{this.props.msg}</p>

      </div>
    )
  }
}
export default Componente;
