import { useState } from "react"
import { UserList } from "./UserList"

export const SextoComponente = () => {

  const [endpoint, setendPoint] = useState('users')

  const handleFetch = () => {
    setendPoint('comments')
  }
  return (
    <>
      <h1>Lista de Usuarios y comentarios</h1>
      <UserList endpoint={endpoint}></UserList>
      <button onClick={handleFetch}>click para traer comentarios</button>
    </>
  )
}
