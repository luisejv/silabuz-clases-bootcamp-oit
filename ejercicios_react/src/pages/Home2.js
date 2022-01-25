import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home2 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="container p-5">
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li key={user.id} className="list-group-item">
              <Link to={"/" + user.id}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home2;
