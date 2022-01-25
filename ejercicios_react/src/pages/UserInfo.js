import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserInfo = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Number.isInteger(+id)) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          console.log(res);
          setUser(res.data);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        });
    } else {
      setError(true);
    }
  }, []);

  if (error) return <div>No se encontro el usuario con ese id</div>;
  if (!user) return <div>Cargando...</div>;

  return (
    <div className="carta">
      <h2>{user.name}</h2>
      <ul>
        <li>Username: {user.username}</li>
        <li>Company: {user.company.name}</li>
        <li>Phone: {user.phone}</li>
        <li>Website: {user.website}</li>
      </ul>
      <Link to={"/"} className="btn btn-success">
        Regresar
      </Link>
    </div>
  );
};

export default UserInfo;
