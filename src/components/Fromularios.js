import React, { useState } from "react";
// manera más simple, solo si hay pocos elementos en el formulario
/*export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [program, setProgram] = useState("javascript");
  const [framework, setFramework] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleInput = (e) => {
    setNombre(e.target.value);
  };
  const handleRadio = (e) => {
    setProgram(e.target.value);
  };
  const handleSelect = (e) => {
    setFramework(e.target.value);
  };
  const handleCheckBok = (e) => {
    setTerminos(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Datos enviados")
  };
  return (
    <>
      <h2>Formularios con React</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" id="" value={nombre} onChange={handleInput} />
        </label>
        <br />
        <label>Elige tu Lenguaje de Programación favorito</label>
        <br />
        <label>
          <input
            type="radio"
            id="php"
            name="lngProgr"
            value="php"
            onChange={handleRadio}
          />
          PHP
        </label>
        <label>
          <input
            type="radio"
            id="java"
            value="java"
            name="lngProgr"
            onChange={handleRadio}
          />
          Java
        </label>
        <label>
          <input
            type="radio"
            id="phyton"
            value="phyton"
            name="lngProgr"
            onChange={handleRadio}
          />
          Phyton
        </label>
        <label>
          <input
            type="radio"
            id="javascript"
            value="javascript"
            name="lngProgr"
            onChange={handleRadio}
            defaultChecked
          />
          JavaScript
        </label>
        <br />
        <label>Elige tu Framework o Libreria favorito</label>
        <br />
        <select name="frameworks" onChange={handleSelect} defaultValue="react">
          <option value="-----">-----</option>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
          <option value="svelte">Svelte</option>
        </select>
        <br />
        <label>
          <input type="checkbox" onChange={handleCheckBok} />
          Acepto Terminos y condiciones
        </label>
        <br />
        <input type="submit" id="" value="Send" />
      </form>
    </>
  );
}*/

// manera más simplificada para formulario con varios inputs
export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Datos enviados")
  };
  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };
  return (
    <>
      <h2>Formularios con React</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" id="" name="nombre" value={form.name} onChange={handleChange} />
        </label>
        <br />
        <label>Elige tu Lenguaje de Programación favorito</label>
        <br />
        <label>
          <input
            type="radio"
            id="php"
            name="lngProgr"
            value="php"
            onChange={handleChange}
          />
          PHP
        </label>
        <label>
          <input
            type="radio"
            id="java"
            value="java"
            name="lngProgr"
            onChange={handleChange}
          />
          Java
        </label>
        <label>
          <input
            type="radio"
            id="phyton"
            value="phyton"
            name="lngProgr"
            onChange={handleChange}
          />
          Phyton
        </label>
        <label>
          <input
            type="radio"
            id="javascript"
            value="javascript"
            name="lngProgr"
            onChange={handleChange}
            defaultChecked
          />
          JavaScript
        </label>
        <br />
        <label>Elige tu Framework o Libreria favorito</label>
        <br />
        <select name="frameworks" onChange={handleChange} defaultValue="react">
          <option value="-----">-----</option>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
          <option value="svelte">Svelte</option>
        </select>
        <br />
        <label>
          <input type="checkbox" name="terminos" onChange={handleChecked} />
          Acepto Terminos y condiciones
        </label>
        <br />
        <input type="submit" id="" value="Send" />
      </form>
    </>
  );
}
