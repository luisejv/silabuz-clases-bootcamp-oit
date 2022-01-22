import React, { useState } from "react";
import jsonPlaceholderAPI from "../utils/API";

const FormPost = ({ setPosts, posts }) => {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const sendPost = () => {
    const body = {
      title: titulo,
      body: contenido,
      userId: 101,
    };
    jsonPlaceholderAPI
      .post("posts/", body)
      .then((res) => {
        //   setPosts((previousValue) => [...previousValue, body])
        setPosts([...posts, body]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container container-padding bg-light">
      {/* <pre>{JSON.stringify(titulo, null, 2)}</pre>
      <pre>{JSON.stringify(contenido, null, 2)}</pre> */}
      <div className="row">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Titulo
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={titulo}
            onChange={(event) => setTitulo(event.currentTarget.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Contenido
          </label>
          <input
            type="text"
            className="form-control"
            id="content"
            value={contenido}
            onChange={(event) => setContenido(event.currentTarget.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-2">
          <button
            type="button"
            className="btn btn-info text-white"
            onClick={sendPost}
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPost;
