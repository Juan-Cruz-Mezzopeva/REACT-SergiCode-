import { useState, useEffect } from "react"

export const UserApp = () => {
    const [users, setUsers] = useState([])
    const [usersFromButton, setUsersFromButton] = useState([])

    // Función para obtener usuarios
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUsers(data)
        } catch(error) {
            console.error(error)
        }
    }

    // Manejador del click del botón
    const handleFetch = () => {
        // Copiamos los usuarios existentes a la segunda lista
        setUsersFromButton([...users])
    }

    // Efecto para cargar usuarios iniciales
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            <h2>UserApp</h2>

            <h3>Lista Original</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        Nombre: {user.name} -- Email: {user.email}
                    </li>
                ))}
            </ul>

            <button onClick={handleFetch}>Llamar a la API</button>
            
            <h3>Lista Duplicada</h3>
            <ul>
                {usersFromButton.map(user => (
                    <li key={user.id}>
                        Nombre: {user.name} -- Email: {user.email}
                    </li>
                ))}
            </ul>
        </>
    )
}