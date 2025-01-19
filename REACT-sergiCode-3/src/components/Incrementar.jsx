import React from "react"


export const Incrementar = React.memo(({incrementar}) => {
    console.log("me estoy redibujando")

    return (
        <button onClick={() => incrementar(10)}> Incrementar {10} </button>
    )
})

// Agregar displayName al componente
Incrementar.displayName = "Incrementar";
