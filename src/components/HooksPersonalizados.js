import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  let { data, isPending, error } = useFetch(url);
  // console.log(useFetch());
  return (
    <>
      <h2>Hooks Personalizados</h2>
      <h3>
        IS PENDING:<br></br> {JSON.stringify(isPending)}
      </h3>
      <h3>
        ERROR:<br></br>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        Data:<br></br>
        <code>{JSON.stringify(data)}</code>
      </h3>
    </>
  );
}
