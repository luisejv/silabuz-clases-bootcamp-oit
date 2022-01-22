import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import platos from "./../utils/platos.json";

const Filter = () => {
  const { filtro } = useParams();
  const [filteredPlatos, setFilteredPlatos] = useState([]);

  useEffect(() => {
    if (filtro === "all") {
      setFilteredPlatos(platos);
    } else {
      setFilteredPlatos(
        platos.filter((plato) => plato.category.toLowerCase() === filtro)
      );
    }
  }, [filtro]);

  return (
    <div>
      {filteredPlatos.map((plato) => {
        // return <PlatoCard></PlatoCard>;
        return (
          <div key={plato.id}>
            {plato.title + " " + plato.category}
            <img width={100} height={100} src={plato.img} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
