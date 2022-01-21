import React, { useEffect, useState } from "react";

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://handlers.education.launchcode.org/static/planets.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPlanets(res);
      });
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
