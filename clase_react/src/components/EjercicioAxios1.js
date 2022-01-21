import axios from "axios";
import React, { useEffect, useState } from "react";

const EjercicioAxios1 = () => {
  const [articulo, setArticulo] = useState({});
  const [numero, setNumero] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${numero}`)
      .then((res) => {
        console.log(res);
        setArticulo(res.data);
      });
  }, [numero]);

  const changeArticle = () => {
    setNumero(numero + 1);
  };

  return (
    <div>
      <h2>{articulo.title}</h2>
      <p>{articulo.body}</p>
      <button onClick={changeArticle}>Cambiar</button>
    </div>
  );
};

export default EjercicioAxios1;
