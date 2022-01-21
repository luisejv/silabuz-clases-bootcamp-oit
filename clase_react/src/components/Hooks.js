import React, { useState } from "react";

const Hooks = () => {
  const [frase, setFrase] = useState(
    "hook".length > 5 ? "bien y tu" : "hola chicos, que tal"
  );
  const [prueba, setPrueba] = useState(6);
  const [prueba2, setPrueba2] = useState(true);

  const [alumno, setAlumno] = useState({
    nombre: "Yhonniel",
    apellido: "Suarez",
    edad: 19,
  });

  return (
    <div>
      <h2>
        {alumno.nombre + " " + alumno.apellido + " y mi edad es " + alumno.edad}
      </h2>
      <button
        onClick={() => setAlumno({ ...alumno, nombre: "Javier" })}
        style={{ width: "150px", height: "80px", fontSize: "23px" }}
      >
        Cortar
      </button>
    </div>
  );
};

export default Hooks;
