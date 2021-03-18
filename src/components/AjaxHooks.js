import React, { useState, useEffect } from "react";
// creamos una función de componente POKEMOn
// destructuramos para no estar enviando props.avatar props.name
function Pokemon({avatar, name}) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption> {name} </figcaption>
    </figure>
  );
}
export default function AjaxHooks() {
  // la API de pokemons nos devuelve un arreglo por eso lo esperamos en un arreglo
  const [pokemons, setPokemons] = useState([]);
  
// no poner async a la función que nos da useEffect,
// crear una función independiente para el fetch async
  useEffect(() => {
    const fetchPokemon = async (url) => {
      let res = await fetch(url);
      let json = await res.json();
      // console.log(json)
      // recorremos el json.result para ovetener la url
      json.results.forEach(async (element) => {
        let res = await fetch(element.url);
        let json = await res.json();
        // console.log(json,"<-----");
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };
        // console.log(pokemon);
        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };
    fetchPokemon("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <>
      <h2> Peticiones Asincronas con HOOKS </h2>
      {pokemons.length === 0 ? (
        <h3> Cargando </h3>
      ) : (
        pokemons.map((element) => (
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
