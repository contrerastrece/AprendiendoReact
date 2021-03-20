import React,{createRef,useRef} from "react";
/*
usar Referencias para
✔Controlar enfoques, selección de texto, o reproducción de medios.
✔Activar animaciones imperativas.
✔Integración con bibliotecas DOM de terceros.
*/
export default function Referencias() {
  // let refMenu=createRef();//solo se usa cuando se crea un componente clase
  let refMenuBtn=useRef();//funciona en un componente Funcional
  let refMenu=useRef();//funciona en un componente Funcional
  console.log(refMenu,refMenuBtn)
  const handleToggleMenu=e=>{
    if(refMenuBtn.current.textContent==="Mostrar Menu"){
      refMenuBtn.current.textContent="Ocultar Menu";
      refMenu.current.style.display="block";
    }else{
      refMenuBtn.current.textContent="Mostrar Menu";
      refMenu.current.style.display="none";
    }
  }
  return (
    <>
      <h2>Referencias</h2>
      <button ref={refMenuBtn} onClick={handleToggleMenu}>Mostrar Menu</button>
      <nav ref={refMenu} style={{display:"none"}}>
        <a href="#">Home</a><br></br>
        <a href="#">Contact-us</a><br></br>
        <a href="#">About</a><br></br>
        <a href="#">Menu-a</a><br></br>
        <a href="#">Menu-b</a><br></br>
      </nav>
    </>
  );
}

/*
import React from "react";
export default function Referencias() {
  const handleToggleMenu=e=>{
    const $menu=document.getElementById("menu");
    if(e.target.textContent==="Mostrar Menu"){
      e.target.textContent="Ocultar Menu";
      $menu.style.display="block";
    }else{
      e.target.textContent="Mostrar Menu";
      $menu.style.display="none";
    }
  }
  return (
    <>
      <h2>Referencias</h2>
      <button id="menu-btn" onClick={handleToggleMenu}>Mostrar Menu</button>
      <nav id="menu" style={{display:"none"}}>
        <a href="#">Home</a><br></br>
        <a href="#">Contact-us</a><br></br>
        <a href="#">About</a><br></br>
        <a href="#">Menu-a</a><br></br>
        <a href="#">Menu-b</a><br></br>
      </nav>
    </>
  );
}
*/