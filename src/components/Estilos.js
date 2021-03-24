import React from 'react';
import './Estilos.css'
import './Estilos.scss'
import moduleCss from "./Estilos.module.css"

export default function Estilos(){
 let myStyles={
   borderRadius:"1rem",
   margin:"2rem auto",
   maxWidth:"50%"
 }
  return(
    <>
    <section className="estilos">
      <h2>Estilos con React</h2>
      <h3 className="bg-react">Estilos en hoja CSS externa</h3>
      <h3 className="bg-react" style={{borderRadius:"0.25rem",margin:"1rem"}}>Estilos en Linea (atributo style)</h3>
      <h3 className="bg-react" style={myStyles}>Estilos en Linea</h3>
      <h3 className="bg-react">Agregando Normalize con<br/><code>@import-normalize;</code></h3>
      <h3 className={moduleCss.success} >Estilos con module</h3>
      <h3 className={moduleCss.error} >Estilos con module</h3>
      <h3 className="bg-sass" >Estilos con SASS</h3>
    </section>
    </>
  )
}