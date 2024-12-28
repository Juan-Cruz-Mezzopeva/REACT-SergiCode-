import Counter from '../Inicio/Counter';  
import SegundoContador from './SegundoContador';    


export const TercerComponente = ( ) => {
    return (
        
        <>
        <h1>Manejo de eventos con react</h1>

        <p>a continuacion un listado de todos los eventos posibles en REACT</p>
        <p>onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
        onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
        onMouseMove onMouseOut onMouseOver onMouseUp
        </p>
        
        <h3>contdor con evento onClick</h3>
        

        <Counter/>

        
        <SegundoContador value={0}/>



        </>
    )}
