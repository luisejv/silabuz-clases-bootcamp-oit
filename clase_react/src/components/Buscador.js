import React, { useContext, useState } from "react";
import QueryContext from "../context/queryContext";

const Buscador = () => {
  const { query, setQuery } = useContext(QueryContext);

  return (
    <input
      className="input-search"
      value={query}
      onChange={(event) => setQuery(event.currentTarget.value)}
      placeholder="Escribe tu busqueda aqui..."
    ></input>
  );
};

export default Buscador;
