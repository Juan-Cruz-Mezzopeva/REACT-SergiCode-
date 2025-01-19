import { useForm } from "./../hooks/useForm";
import { useReducer } from "react";

const initialState = [
  {
    id: 2,
    tarea: "Explicar useReducer",
    finalizada: false,
  },
]; // Initialize tareasState as an empty array

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREAS] Agregar Tarea":
      return [...state, action.payload]; // Add new task to the array

    case "[TAREAS] Finalizar Tarea":
      return state.map((tarea) => {
        if (tarea.id === action.payload.id) {
          return {
            ...tarea,
            finalizada: !tarea.finalizada,
          };
        }

        return tarea;
      });

    case "[TAREAS] Eliminar Tarea":
      return state.filter((tarea) => tarea.id !== action.payload.id);

    case "[TAREAS] Borrar Tarea":
      console.log("borrar todo");
      return []; // Reset to empty array
    default:
      return [];
  }
};

export const ListaTareas = () => {
  const [tareasState, dispatch] = useReducer(tareaReducer, initialState);

  const { tarea, formState, onInputChange } = useForm({ tarea: "" });

  const agregarTarea = (event) => {
    event.preventDefault();
    if (formState.tarea == "") return;
    const tarea = {
      id: new Date().getTime(),
      tarea: formState.tarea,
      finalizada: false,
    };
    const action = {
      type: "[TAREAS] Agregar Tarea",
      payload: tarea,
    };
    dispatch(action);
  };

  const finalizarTarea = (tarea) => {
    // console.log("estamos en finalizar tarea")

    const action = {
      type: "[TAREAS] Finalizar Tarea",
      payload: tarea,
    };
    dispatch(action);
  };

  const eliminarTarea = (tarea) => {
    const action = {
      type: "[TAREAS] Eliminar Tarea",
      payload: tarea,
    };
    dispatch(action);
  };

  const reset = () => {
    const action = {
      type: "[TAREAS] Borrar Tarea",
      payload: null
    } 
    dispatch(action)

  }

  return (
    <>
      <form onSubmit={agregarTarea}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="tarea"
            placeholder="Ingresar Tarea"
            value={tarea}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>
      </form>
      <hr />
      <ul className="list-group">
        {/* {console.log(JSON.stringify(tareasState, null, 2))} */}
        {tareasState.map((tarea) => {
          return (
            <li
              key={tarea.id}
              className="list-group-item d-flex justify-content-between"
            >
              <span>{tarea.tarea}</span>
              <div>
                <input
                  type="checkbox"
                  value={tarea.finalizada}
                  onChange={() => finalizarTarea(tarea)}
                />
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarTarea(tarea)}
                >
                  Borrar 🗑
                </button>

              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
