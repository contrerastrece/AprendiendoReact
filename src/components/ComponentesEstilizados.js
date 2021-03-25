import React from "react";
// para realizar animaciones tendremos que llamar a los Keyframes
// se recomienda llamar en la index.js
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

export default function ComponenteEstilizado() {
  const mainColor = "#db7093";
  const mainColor80 = "#db709380";
  // crando una función para manipular una transition para
  const setTransition = (time) => `all ${time} ease-in-out`;
  const fadeIn = keyframes`
    0%{
      opacity:0;
    }
    100%{
      opacity:1;
    }  
  `;
  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    background-color: ${mainColor};

    // transition:background-color 0.5s ease-in;
    transition: ${setTransition("1s")};
    color: ${(props) => props.color};
    color: ${({ color }) => color};

    //aplicar el color blanco a los que no se le pasó la propiedad "color"
    color: ${({ color }) => color || "#fff"};

    // realizando animaciones
    animation: ${fadeIn} 5s ease-in-out;

    //destructuramos props y preguntamos al componente si tiene el elemento isButton para darle el estilo de un Btn
    ${({ isButton }) =>
      isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 1rem;
        cursor: pointer;
      `}

    &:hover {
      background-color: ${mainColor80};
    }
  `;

  const light = { color: "#222", bgColor: "#ddd" };
  const dark = { color: "#ddd", bgColor: "#222" };
  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  // aplicando Herencia del componente BOX
  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  // creando componenteGlobalStyle
  const GlobalStyle = createGlobalStyle`
    h2{
      padding:2rem;
      -webkit-text-stroke: 1px black;
      -webkit-text-fill-color: yellow;
      background:radial-gradient(circle, rgba(83,92,241,1) 0%, rgba(0,160,250,1) 100%);;
    }   
    `;

  return (
    <>
      <GlobalStyle />
      <h2>Styled-Component</h2>
      <MyH3>Hola soy un H3 de style-components</MyH3>
      <MyH3 color="#61dafb">Hola soy un H3 de style-components</MyH3>
      <MyH3 isButton>Soy un H3 estilizado como Botón</MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy un Box light</Box>
        <BoxRounded>Soy un Box Rounded-light</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy un Box Dark</Box>
        <BoxRounded>Soy un Box Rounded-dark</BoxRounded>
      </ThemeProvider>
    </>
  );
}
