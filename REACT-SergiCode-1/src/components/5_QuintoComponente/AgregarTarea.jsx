import { useState } from "react";

export const AgregarTarea = ({ agregarTarea }) => { //{agregarTarea } --> esto es desestructurar la variable min2:09
  const [inputValue, setImputValue] = useState("");
  const onImputChange = (event) => {
    setImputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
     
    const envio = {
      nombre: inputValue,
      visto: false,
    };
    agregarTarea((tareas) => [...tareas, envio]);
  };

  return (
    <form onSubmit={onSubmit}>
      {" "}
      {/*    se podria poner como 'onSubmit={(event) => onSubmit(event)  pero es solo un parametro y no hace falta*/}
      <input
        type="text"
        placeholder="Ingrese nueva tarea"
        value={inputValue}
        onChange={onImputChange} //usar onInputChange es igual a usar "(event) => onImputChange(event)" ya que solo tiene un parametro que esta pasando
      />
    </form>
  );
};

export default AgregarTarea;
