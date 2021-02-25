import React from 'react';

export default function Propiedades(props) {
  return (
    <div>
      <h2>Propiedades</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano?"verdadero":"falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre+" - "+props.objeto.apellido}</li>
        <li>{props.arreglo.map(props.funcion).join("-")}</li>       
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>

      </ul>
    </div>
  )
}