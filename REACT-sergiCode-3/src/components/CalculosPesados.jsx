import { useMemo, useState, useCallback } from "react"
export const CalculosPesados = () => {
    const [listaNumeros, setListaNumeros] = useState([1,2,3,4,5,6,7])
    const [show, setShow] = useState(true)

    const getCalculo = useCallback((numeros) => {
        console.log('Calculando')
        return numeros.reduce((a,b) => a * b)
    }, [])
    
    const resultado = useMemo(() =>  getCalculo(listaNumeros), [listaNumeros])
  
    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length-1] + 1])
    }

  return ( 
    <>
    <h2>Calculo: </h2>
    <p>{resultado}</p>

    <button className="btn btn-primary" onClick={() => agregarNumero()}>Agregar Numero</button>
    <button className="btn btn-primary" onClick={() => setShow(!show)}>{show ? 'show' : 'hide'}</button>
    </>
  )
}

