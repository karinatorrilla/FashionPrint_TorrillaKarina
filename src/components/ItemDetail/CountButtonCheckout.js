import React, { useState, useContext, useEffect } from "react";
import { BagContext } from "../Context/CardContext";

export const CountButtonCheckout = ({ producto }) => {
  const [number, setNumero] = useState(producto.cantidad);
  const { addBag } = useContext(BagContext);
  const AddBagg = (cant) => addBag(producto, cant);
  //Suma producto
  const sumaProducto = () => {
    setNumero(number + 1);
  };

  //Resta producto
  const restaProducto = () => {
    setNumero(number - 1);
  };
  useEffect(() => {
    AddBagg(number);
  }, [number]);
  return (
    <>
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
        <button
          className="button is-primary button_card_checkout"
          onClick={() => AddBagg(number)}
        >
          Comprar
        </button>
      </div>
    </>
  );
};
