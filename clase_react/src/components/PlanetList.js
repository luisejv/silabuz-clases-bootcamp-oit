import axios from "axios";
import React, { useEffect, useState } from "react";
import API from "../utils/axios";

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    // fetch("https://handlers.education.launchcode.org/static/planets.json")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     setPlanets(res);
    //   });

    API.get("planets.json")
      .then((res) => setPlanets(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {planets.map((planet) => (
        <li key={planet}>
          <div>
            <img src={planet.image} height={100} width={100} alt="" />
            <strong>Nombre: </strong>
            <span>{planet.name}</span> <strong>Lunas: </strong>
            <span>{planet.moons}</span> <strong>Diametro: </strong>
            <span>{planet.diameter}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PlanetList;
