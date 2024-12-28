import PropTypes from 'prop-types';
import { useState } from 'react';



export default function SegundoContador({ value1 }) {
    function handleClick(event) {
        console.log(event)
    }

    function handleClick2args(event, arg2) {
        console.log(event)
        console.log(arg2)
    }

    const handleclick3 = () => {
        {console.log(`aumenta el valor de value1 por el evento onClick a ${value1 += 1}`)}
        console.log()

    }

    const [contador, setContador] = useState(value1)

    const handleClick4 = () => {
        setContador(contador + 1) 
        console.log(`aumenta el valor del contador por el evento onClick a ${value1 += 1}`)

    }
    return (
    <>
      <h3>Segundo contador</h3>
      <p>este es un segundo boton para el estudio y aplicacion de eventos</p>

      <button onClick={handleClick}>
        Apriete aquí !
      </button>

       <p>boton con dos argumentos revisar en laimpresion en consola</p> 
      
       <button onClick={(event) => handleClick2args(event, 'segundo parametro')}>
        Apriete aquí !
      </button>

      <p>boton para manejo de estado</p>
      
      <button onClick={() => handleclick3()}>
        Apriete aquí !
      </button>
      
      <h2>Contador Final</h2>
      
      <p>Apriete el Boton para aumentar el contador final</p>
      <button onClick={handleClick4}>
        Apriete Aquí !
      </button>
      <p>el contador cambia a : {contador} por el uso de useState</p>

    </>
  )
}

SegundoContador.propTypes = {
    value1: PropTypes.number.isRequired,
  };

  SegundoContador.defaultProps = {
    value1: 5,
     
  }