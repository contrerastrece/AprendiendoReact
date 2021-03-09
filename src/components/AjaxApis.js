import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />{" "}
      <figcaption> {props.name} </figcaption>{" "}
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };
  // cuando se ejecuta el constructor el componente aún no está en el DOM
  // por eso no tiene sentido pedir peticiones
  // las peticiones lo haremos en un COmponentDidMount
  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        json.results.forEach((element) => {
          fetch(element.url)
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };
              // podriamos utilizar push pero utilizaremos spread Operator
              let pokemons = [...this.state.pokemons, pokemon];

              // usamos shortHand para no usar pokemons.pokemons y solo usar pokemons
              this.setState({
                pokemons,
              });
            });
        });
      });
  }
  render() {
    return (
      <>
        <h2> Peticiones Asincronas en Componentes de Clase </h2>
        {this.state.pokemons.length === 0 ? (
          <h3> Cargando </h3>
        ) : (
          this.state.pokemons.map((element) => (
            <Pokemon
              key={element.id}
              name={element.name}
              avatar={element.avatar}
            />
          ))
        )}
      </>
    );
  }
}
