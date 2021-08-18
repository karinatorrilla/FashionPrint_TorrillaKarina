import React, { useState } from "react";
import { useContext } from "react";
import { BagContext } from "../Context/CardContext";
import { db } from "../../firebase";
import { CountButtonCheckout } from "../ItemDetail/CountButtonCheckout";
import "./Checkout.css";
export const FormCheckout = () => {
  const { bagg, totalValor, clearBag } = useContext(BagContext);
  const [orderId, setOrderId] = useState(false);
  const [setError] = useState(false);
  const initialState = {
    name: "",
    email: "",
    phone: "",
  };

  const createOrder = (data) => {
    const order = { comprador: data, items: bagg, total: totalValor };
    const orders = db.collection("compras");
    orders
      .add(order)
      .then(({ id }) => {
        setOrderId(id); // success
        clearBag();
      })
      .catch((err) => {
        setError(err);
      });
  };

  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    createOrder(values);
    setValues({ ...initialState });
  };

  return (
    <div className="content_checkout">
      {orderId !== false && (
        <article className="message is-primary">
          <div className="message-body">
            Compra exitosa!. Número de orden: {orderId}
          </div>
        </article>
      )}
      <ul className="columns is-multiline">
        {bagg.map((item) => {
          return (
            <li className="column is-4" key={item.id}>
              <div className="card">
                <div className="content_lado_left padding_checkout_card">
                  <img
                    className="imagen_checkout"
                    src={item.img}
                    alt={item.nombre}
                  />
                </div>
                <div className="content_lado_rigth txt_aling_left padding_checkout_card">
                  <div className="content">
                    <p className="title is-5 padding_bottom">{item.nombre}</p>
                    <p className="subtitle is-6">Precio: ${item.precio}</p>
                    <p className="subtitle is-6">Cantidad: {item.cantidad}</p>
                    <p className="subtitle is-6">
                      {" "}
                      Total: ${item.cantidad * item.precio}
                    </p>
                  </div>
                  <div className="content">
                    <CountButtonCheckout producto={item} />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="title is-5">Total a pagar: ${totalValor}</p>
      <form className="form_checkout" onSubmit={handleOnSubmit}>
        <div className="field">
          <label className="label">Nombre Completo</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Karina Torrilla"
              onChange={handleOnChange}
            ></input>
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="karina@gmail.com"
              onChange={handleOnChange}
            ></input>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Telefono</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="number"
              name="phone"
              placeholder="1122334455"
              onChange={handleOnChange}
            ></input>
            <span className="icon is-small is-left">
              <i className="fas fa-mobile-alt"></i>
            </span>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Confirmar compra</button>
          </div>
        </div>
      </form>
    </div>
  );
};
