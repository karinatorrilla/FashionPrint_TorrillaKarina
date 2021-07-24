//ACA DEBO MOSTRAR EL DETALLE DE CADA PRODUCTO
import React, { useState, useContext } from "react";
import { ItemDetailContainer } from "./ItemDetailContainer";

export const ItemDetail = ({ producto }) => {
  const [number, setNumero] = useState(0);
  //Suma producto
  const sumaProducto = () => {
    setNumero(number + 1);
  };

  //Resta producto
  const restaProducto = () => {
    setNumero(number - 1);
  };
  return (
    <>
      <div className="padding_detail_item">
        <div className="content_lado_left">
          <img
            className="imagen_detail"
            src={producto.img}
            alt={producto.nombre}
          />
        </div>
        <div className="content_lado_rigth txt_aling_left">
          <span className="title is-4">{producto.nombre}</span>
          <p className="title is-6">{producto.detalle}</p>
          <br></br>
          <span className="title is-6">${producto.precio}</span>
          <br></br>
          <div className="w100 margin_top_bot">
            <div className="lado_izquiero_linea">
              <span className="txt_left_negrita">STOCK: </span>
              <span className="txt_left_negrita_claro"> {producto.stock}</span>
            </div>
            <div className="lado_derecho_linea">
              <span className="txt_left_negrita">COMPRAR: </span>
              <span className="txt_left_negrita_claro">{number} </span>
            </div>
          </div>

          <div className="w100 text_aling_center margin_top_bot">
            {number === 0 ? (
              <button className="button is-rounded" title="disabled" disabled>
                <i className="fas fa-minus"></i>
              </button>
            ) : (
              <button className="button is-rounded" onClick={restaProducto}>
                <i className="fas fa-minus"></i>
              </button>
            )}
            <span className="cant_number_producto">{number}</span>
            {number >= producto.stock ? (
              <button
                className="button is-rounded"
                title="No hay mas stock"
                disabled
              >
                <i className="fas fa-plus"></i>
              </button>
            ) : (
              <button className="button is-rounded" onClick={sumaProducto}>
                <i className="fas fa-plus"></i>
              </button>
            )}
          </div>
          <div>
            <button class="button is-primary" onClick={ buyItem }>Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
