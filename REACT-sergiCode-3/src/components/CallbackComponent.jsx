import { useCallback, useState } from "react"
import {Incrementar} from "./Incrementar"

export const CallbackComponent = () => {
  
    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback(
        (val) => {
        // esto se hace porque si hacemos que callback memorice "counter" no se va a modificar el valor
        // por eso, como setCounter tiene internamente el valor de counter, podemos usarlo para definir una 
        // variable interna con la que vamos modificando el valor 
        setCounter(contador => contador + val) 
        },[]
    )

    return (
    <>
      <h1>Contador: {counter} </h1>
      <Incrementar incrementar = {incrementarPadre}></Incrementar>
    </>
)
}
