import { useEffect, useState} from "react"

export const UserList = ({ endpoint }) => {
      
    const [data, setData] = useState([])
  
      const fetchdata = async () => {
          try {
              const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
              const data = await response.json()
              setData(data)
          } catch(error) {
              console.error(error)
          }
      }

      useEffect(() => {
        fetchdata()
    }, [endpoint])
  

    return (
    <>
       <ul>
            {endpoint == 'users' ? 
                                data.map(objet => (
                                    <li key={objet.id}>
                                        Nombre: {objet.name} -- Email: {objet.email}
                                    </li>
                                )) : 
                                data.slice(0, 5).map(user => (
                                    <li key={user.id}>
                                        Titulo: {user.name} <br />
                                        comentario: {user.body}
                                        <br /><br />
                                    </li>
                                    
                ))
                } 
       </ul>
    </>
    )
}
