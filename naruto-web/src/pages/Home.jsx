import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NARUTO_API from "../utils/narutoAPI";

const filtros = [
  {
    label: "Clanes",
    url: "clans",
  },
  {
    label: "Personajes",
    url: "characters",
  },
  {
    label: "Aldeas",
    url: "villages",
  },
  {
    label: "Organizaciones",
    url: "organizations",
  },
];

const Home = () => {
  const [filterSelected, setFilterSelected] = useState(filtros[1]);

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    NARUTO_API.get(`naruto/${filterSelected.url}/`).then((res) => {
      console.log(res);
      setDatos(res.data.results);
    });
  }, [filterSelected]);

  return (
    <div className="container mt-2">
      <div className="row">
        {filtros.map((filtro, index) => {
          return (
            <div key={"filtros" + index} className="col text-center">
              <button
                className={`btn btn-outline-info ${
                  filtro.label === filterSelected.label && "active"
                }`}
                onClick={() => setFilterSelected(filtro)}
              >
                {filtro.label}
              </button>
            </div>
          );
        })}
      </div>
      <p className="h1 mb-5">{filterSelected.label}</p>
      <div
        id="card_container"
        className="row gx-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"
      >
        {datos.map((dato) => {
          return (
            <Link key={dato.pk} to={"/personaje/" + dato.pk}>
              <div className="col mb-5" id="card_template">
                <div className="card fixed-height">
                  <img
                    className="card-img-top comic_img"
                    src={dato.image_url}
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-bolder comic_name">{dato.name}</h5>
                    <div className="d-flex justify-content-center text-warning small">
                      <span className="px-2 text-dark">{dato.rank}</span>
                    </div>

                    <span className="text-muted comic_ori_price">
                      {dato.description}
                    </span>
                    <span className="comic_price">{dato.village}</span>
                    <span className="comic_price">{dato.clan}</span>
                  </div>

                  <div className="card-footer pb-4 border-top-0 bg-transparent">
                    <div className="text-center">
                      <button className="btn btn-outline-dark comic_button">
                        Marcar como favorito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
