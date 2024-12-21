import '../styles/PrimerComponente.css'

const string = "esto es un texto"
const numero = 13234
const array = ['Curso React', 'Youtube', 4, 10000]
const boolean = true 
const funcion = () => 1+1
const objeto = {nombre: 'curso de javascript', duracion: 4 }
const fecha = new Date()


export const PrimerComponente = () => {
  return (
    <>

    <h1>variables React</h1>
    <h2>muestra de uso de variables y datos con react en componentes</h2>

    <div>
        <li>llamado a string - {string}</li>
        <li>llamado a numero - {numero}</li>
        <li>llamado a array - {array}</li>
        <li>llamado a boolean - { boolean } - no muestra nada porque el mostrar el booleano no da nada</li>
        <li>llamado a funcion - { funcion() }</li>
        <li>{JSON.stringify(objeto)}</li>
        <li>{JSON.stringify(fecha)}</li>
    </div>
    </>
)
}
