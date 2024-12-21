import PropTypes from 'prop-types';


const Items = ({nombre, visto}) => {
    return (
    <li>
       {nombre}
       {visto ? '✅' : '⛔'}
    </li>
)
}

const ItemsC = ({nombre, visto}) => {
    return (
    <li>
       {nombre}
       {visto && '✅'}
    </li>
)
}



export const CuartoComponente = ( ) => {
    return (
        
        <>
        <h2>Cuarto Componente</h2>
        <h3>condicionales y ternarios</h3>
        <h3>Listado hecho con operadores ternarios de temas del curso</h3>

        <ol>
            <Items nombre= 'Instalaciones necesarias' visto = {true}></Items>
            <Items nombre= 'Uso de Vite' visto = {true}></Items>
            <Items nombre= 'Componentes' visto = {true}></Items>
            <Items nombre= 'variables en jsx' visto = {true}></Items>
            <Items nombre= 'props' visto = {true}></Items>
            <Items nombre= 'Eventos' visto = {true}></Items>
            <Items nombre= 'useState' visto = {false}></Items>
            <Items nombre= 'Redux' visto = {false}></Items>
            <Items nombre= 'customHooks' visto = {false}></Items>

        </ol>

        <h3>Listado creado con condicionales</h3>

        <ol>
            <ItemsC nombre= 'Instalaciones necesarias' visto = {true}></ItemsC>
            <ItemsC nombre= 'Uso de Vite' visto = {true}></ItemsC>
            <ItemsC nombre= 'Componentes' visto = {true}></ItemsC>
            <ItemsC nombre= 'variables en jsx' visto = {true}></ItemsC>
            <ItemsC nombre= 'props' visto = {true}></ItemsC>
            <ItemsC nombre= 'Eventos' visto = {true}></ItemsC>
            <ItemsC nombre= 'useState' visto = {false}></ItemsC>
            <ItemsC nombre= 'Redux' visto = {false}></ItemsC>
            <ItemsC nombre= 'customHooks' visto = {false}></ItemsC>

        </ol>

        </>
)}

Items.propTypes = {
    nombre: PropTypes.string.isRequired
  }

Items.propTypes = {
    visto: PropTypes.bool.isRequired
  }

Items.defaultProps = {
    nombre: 'esta es una prop definida por defecto',
    visto: false
  }

ItemsC.propTypes = {
    nombre: PropTypes.string.isRequired
  }

ItemsC.propTypes = {
    visto: PropTypes.bool.isRequired
  }

ItemsC.defaultProps = {
    nombre: 'esta es una prop definida por defecto',
    visto: false
  }