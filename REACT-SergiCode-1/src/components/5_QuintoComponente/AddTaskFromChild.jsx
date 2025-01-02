import { useState } from "react";

export const AddTaskFromChild = ({ agregarTarea }) => {
  const [imputValue, setImputValue] = useState("");

  const onImputChange = (event) => {
    setImputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    agregarTarea(imputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      {" "}
      {/* se podria poner como 'onSubmit={(event) => onSubmit(event)  pero es solo un parametro y no hace falta*/}
      <input
        type="text"
        placeholder="Ingrese nueva tarea"
        value={imputValue}
        onChange={onImputChange} //usar onInputChange es igual a usar "(event) => onImputChange(event)" ya que solo tiene un parametro que esta pasando
      />
    </form>
  );
};
 

export default AddTaskFromChild;
