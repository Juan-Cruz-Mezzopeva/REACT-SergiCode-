import { useState } from "react";
import { UserList } from "./components/userList";

export const UserApp = () => {
  const [endPoint, setEndpoint] = useState("users");
  const handleFetch = () => {
    setEndpoint("comments");
  };
  return (
    <>
      <h1>Lista de Usuarios y comentarios</h1>
      <UserList endpoint={endPoint}> </UserList>
      <button onClick={handleFetch}>Click para llamar a la API</button>
    </>
  );
};
