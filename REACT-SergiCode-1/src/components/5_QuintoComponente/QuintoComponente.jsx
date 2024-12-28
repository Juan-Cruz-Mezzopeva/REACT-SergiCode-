import PropTypes from 'prop-types';
import { useState } from 'react';
import AgregarTarea from './AgregarTarea';
import AddTaskFromChild from './AddTaskFromChild';




const Item = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? "✅" : "⛔"}
    </li>
  );
};



export const QuintoComponente = () => {


  const addTask = () => {
    setArreglo([...arreglo, {nombre: 'nuevo', visto:false}])
  }


  let listadoSecciones = [
    {id:1,nombre: "Listado de secciones Creado Dinamicamente con map ", visto: true },
    {id:2,nombre: "seccion 1", visto: true },
    {id:3,nombre: "seccion 2", visto: true },
    {id:4,nombre: "seccion 3", visto: false },
    {id:5,nombre: "seccion 4", visto: true },
    {id:6,nombre: "seccion 5", visto: true },
    {id:7,nombre: "seccion 6", visto: false },
    {id:8,nombre: "seccion 7", visto: true },
    {id:9,nombre: "seccion 8", visto: false },
    {id:10, nombre: "seccion 9", visto: true },
  ];

  const onAgregarTarea = (val) => {

    let valor = val.trim()
    if(valor < 1) return
    const envio = {
      id:arreglo.length +1,
      nombre:valor,
      visto: false
    }
    setArreglo([...arreglo, envio])
  }

  const [arreglo, setArreglo ] = useState(listadoSecciones)

  console.log(arreglo)


  return (
    <>

      <h2>Quinto Componente</h2>
 
      <h3>Listado creado dinamicamene con un map</h3>

      <ol>
         {arreglo.map(itemLista => <Item key={itemLista.id} nombre={itemLista.nombre} visto={itemLista.visto}></Item>)}
      </ol>

      

    </>
  );
};

/** 
 * codigo a reescribir
      
      <button onClick={() => addTask()}>Agregar Tarea</button>

      <AgregarTarea agregarTarea={setArreglo} ></AgregarTarea>

      <p>segundo agregador de tareas </p>
      <br />
      <AddTaskFromChild  agregarTarea={onAgregarTarea}></AddTaskFromChild>
 */

Item.propTypes = {
    nombre: PropTypes.string.isRequired
  }

Item.propTypes = {
    visto: PropTypes.bool.isRequired
  }

Item.defaultProps = {
    nombre: 'esta es una prop definida por defecto',
    visto: false
  }

