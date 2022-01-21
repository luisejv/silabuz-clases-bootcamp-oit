import React from "react";

const Alumno = ({ nombre, apellido, esPar, selected, setSelected, index }) => {
  return (
    <div
      className="alumn-box"
      style={{
        backgroundColor: selected
          ? "green"
          : esPar
          ? "cornflowerblue"
          : "white",
      }}
      onClick={() => setSelected(index)}
    >
      Nombre: {nombre}, Apellido: {apellido}
    </div>
  );
};

export default Alumno;
