import React, { useState } from "react";

const Buscador = ({ query, setQuery }) => {
  return (
    <input
      className="input-search"
      value={query}
      onChange={(event) => setQuery(event.currentTarget.value)}
    ></input>
  );
};

export default Buscador;
