import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from "./components/UserList";

const url = "https://randomuser.me/api/?results=10";

const Ejercicio2 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setUsers(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3>{users.length} birthdays today</h3>
      <UserList users={users}></UserList>
      <button className="btn btn-success" onClick={() => setUsers([])}>
        Clear All
      </button>
    </div>
  );
};

export default Ejercicio2;
