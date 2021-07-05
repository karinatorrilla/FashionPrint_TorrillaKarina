//ACA DEBO MOSTRAR EL LISTADO DE LOS PRODUCTOS
import React from "react";
import { Link } from "react-router-dom";

export const ItemList = ({ id, nombre, precio, img }) => {
  return (
    <>
      <div className="column is-4 is_zoom ">
        <Link to={`/producto/${id}`}>
          <div className="card">
            <div>
              <figure>
                <img className="imagen_producto" src={img} alt={nombre} />
              </figure>
            </div>
            <div className="card-content">
              <div className="w100 text_aling_center margin_top_bot">
                <span className="title is-6 ">{nombre}</span>
              </div>
              <div className="w100 text_aling_center margin_top_bot">
                <span className="title is-6">{precio}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
