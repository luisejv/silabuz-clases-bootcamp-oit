import axios from "axios";
import React, { useEffect, useState } from "react";
import Robot from "./Robot";

const client = axios.create({
  baseURL: "https://random-data-api.com/api/users/",
});

const ListaRobots = ({ query }) => {
  const [robots, setRobots] = useState([]);
  const [robotsFinal, setRobotsFinal] = useState([]);

  const fetchRobots = () => {
    client.get("random_user?size=10").then((res) => {
      setRobots(
        res.data.map((robot) => {
          const { avatar, email, uid, username } = robot;
          return {
            avatar,
            email,
            uid,
            username,
          };
        })
      );
      setRobotsFinal(
        res.data.map((robot) => {
          const { avatar, email, uid, username } = robot;
          return {
            avatar,
            email,
            uid,
            username,
          };
        })
      );
    });
  };

  useEffect(() => {
    fetchRobots();
  }, []);

  useEffect(() => {
    if (query === "") {
      setRobotsFinal(robots);
    } else {
      setRobotsFinal(robots.filter((robot) => robot.username.includes(query)));
    }
  }, [query]);

  if (robotsFinal.length === 0) {
    return <div>No hay resultados para tu busqueda</div>;
  }

  return (
    <div>
      <button className="btn-refresh" onClick={fetchRobots}>
        Refresh
      </button>
      <div className="container">
        {robotsFinal.map((robot) => {
          return <Robot key={robot.uid} data={robot}></Robot>;
        })}
      </div>
    </div>
  );
};

export default ListaRobots;
