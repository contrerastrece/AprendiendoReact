import React, { useState } from "react";

export default function ContadorHooks(props) {
  // console.log(useState())

  // destructuración de JS es así como funciona el useState para
  // count nuestra variable inicial y setCount para nuestra actualización
  const [count, setCount]=useState(0);
  const sumar=()=>setCount(count+1);
  const restar=()=>setCount(count-1);
  return (
    <>
      <h2>Hooks - useState</h2>
      <h3>{count}</h3>
      <nav>
        {/* ya no será necesario llamar con this a nuestras funciones */}
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
    </>
  )
}