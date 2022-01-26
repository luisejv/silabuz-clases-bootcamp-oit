import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NARUTO_API from "../utils/narutoAPI";

const Character = () => {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    NARUTO_API.get(`naruto/characters/${id}/`).then((res) => {
      console.log(res);
      setPersonaje(res.data);
    });
  }, [id]);

  return (
    <section className="bg-light">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <img
                id="comic_image"
                className="card-img img-fluid"
                src={personaje.image_url}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <div id="comic_card" className="card h-100">
              <div className="card-body">
                <h1 id="title" className="h2">
                  {personaje.name}
                </h1>
                <p id="price" className="h3 py-2">
                  {personaje.village}
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h6>Clan:</h6>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted">
                      <strong id="format">{personaje.clan}</strong>
                    </p>
                  </li>
                </ul>

                <h6>Description:</h6>
                <p id="description">{personaje.description}</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h6>Rank :</h6>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted">
                      <strong id="stock">{personaje.rank} </strong>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Character;
