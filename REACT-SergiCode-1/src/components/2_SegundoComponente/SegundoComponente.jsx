
import PropTypes from 'prop-types';
export const SegundoComponente = ({titulo, numero, texto2, numero2}) => {
  console.log(titulo)
  return (
    <>
    <div>
      <h1>SegundoComponente</h1>
      <h2>Entendiendo las Props</h2>
      <p>texto de la primer prop : {titulo}</p>
      <li>aca mostramos un prop de numero : {numero}</li>
      <li>primer prop de texto definida por defecto : {texto2}</li>
      <li>primer prop de numero definida por defecto : {numero2}</li>
    </div>
    </>
  )
}
SegundoComponente.propTypes = {
  titulo: PropTypes.string.isRequired
}

SegundoComponente.propTypes = {
  texto2: PropTypes.number.isRequired
}

SegundoComponente.propTypes = {
  numero2: PropTypes.string.isRequired
}

SegundoComponente.propTypes = {
  numero: PropTypes.number.isRequired
}

  SegundoComponente.defaultProps = {
    numero2: 5,
    texto2: 'esta es una prop definida por defecto'
  }

 
