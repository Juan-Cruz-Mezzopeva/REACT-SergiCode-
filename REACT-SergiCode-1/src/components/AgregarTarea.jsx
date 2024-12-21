import { useState } from "react";

export const AgregarTarea = ({ agregarTarea }) => {
  const [imputValue, setImputValue] = useState("");

  const onImputChange = (event) => {
    setImputValue(event.target.value);
    console.log();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const envio = {
      nombre: imputValue,
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
        value={imputValue}
        onChange={onImputChange} //usar onInputChange es igual a usar "(event) => onImputChange(event)" ya que solo tiene un parametro que esta pasando
      />
    </form>
  );
};

export default AgregarTarea;
