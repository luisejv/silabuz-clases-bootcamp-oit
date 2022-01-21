import React, { useEffect, useState } from "react";
import alumnos from "../utils/alumnos.json";
import Alumno from "./Alumno";

const ListaAlumnos = () => {
  const [alumns, setAlumns] = useState([]);

  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    console.log("me volvi a pintar ", alumns.length);
  });

  useEffect(() => {
    setTimeout(() => {
      // setSelected(selected + 1);
      setAlumns(alumnos);
      console.log("solo me pinto 1 vez");
    }, 1000);
  }, []);

  useEffect(() => {
    alert(`el nuevo seleccionado es: ${selected}`);
    console.log("me pinto cada vez que selected cambie ", selected);
  }, [selected]);

  return (
    <div>
      {alumns.map(({ nombre, apellido }, index) => {
        return (
          <Alumno
            key={nombre + apellido}
            nombre={nombre}
            apellido={apellido}
            esPar={index % 2 === 0}
            selected={selected === index}
            index={index}
            setSelected={setSelected}
          ></Alumno>
        );
      })}
      <button onClick={() => setAlumns(alumns.slice(0, alumns.length - 1))}>
        Quitar alumno
      </button>
    </div>
  );
};

export default ListaAlumnos;
