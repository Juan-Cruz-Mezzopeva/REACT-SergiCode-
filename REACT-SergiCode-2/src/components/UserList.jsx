import { useFetchData } from './hooks/useFetchData';

export const UserList = ({ endpoint }) => {
  const { data, isLoading } = useFetchData(endpoint);

  return (
    <>
      <ul>
        {isLoading ? 
          <p>Cargando datos...</p>
          : endpoint == 'users' 
          ? data.map(item => (<li key={item.id}> Nombre: {item.name} - Email: {item.email}</li>))
          : data.slice(0, 5).map(item => (<li key={item.id}> Título: {item.name} <br /> Comentario: {item.body} <br /><br /></li>))
          }
      </ul>
    </>
  );
};