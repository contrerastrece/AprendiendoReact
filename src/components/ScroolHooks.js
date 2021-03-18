import React, {useState,useEffect} from "react";

export default function ScrollHooks(){
  const [scrollY, setScrollY]=useState(0);
// si un useEffect no s ele pasa la dependecia será tomado cmo un 
// compponent ComponenteDidUpdate

// se recomienda usar [] la dependecia vacía para que lo lea solo una vez 
// de la cual será nuestro ComponentDidMount

// se recomienda pasar la dependecia de la variable que sufrirá cambio
// para anuestro caso sería  [scrollY]
  useEffect(() =>{
    // console.log("Moviendo el Scroll Y");
    const detectarScroll=()=>{
      setScrollY(window.pageYOffset);
    }
    // detectarScroll();
    window.addEventListener("scroll",detectarScroll)
    return ()=>{      
      window.removeEventListener("scroll",detectarScroll)
    }
  },[scrollY])
  // componentDidMount
  useEffect(()=>{
    // console.log("**** Fase de Montaje ****")
  },[])
  // componentDidUpdate
  useEffect(()=>{
    // console.log("**** fase de Actualización ****")
  })
  // componentWillUnmount
  useEffect(()=>{
    return ()=>{
      // console.log("**** fase de Desmontaje ****");
    }
  })
  
  return(
    <>
      <h2>Hooks - UseEffect y ciclo de vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  )
}