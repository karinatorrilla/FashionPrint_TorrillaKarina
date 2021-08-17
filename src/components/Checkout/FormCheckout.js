import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
export const FormCheckout = (buyItems) => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    date: firebase.firestore.Timestamp.formDate(new Date()),
  };

  const [values, setValues] = useState(initialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    buyItems(values);
    setValues({ ...initialState });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="field">
          <label className="label">Nombre Completo</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Karina Torrilla"
              onChange={handleOnChange}
            ></input>
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              className="input is-danger"
              type="email"
              name="email"
              placeholder="karina@gmail.com"
              value=""
              onChange={handleOnChange}
            ></input>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Telefono</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="phone"
              placeholder="1122334455"
              onChange={handleOnChange}
            ></input>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Confirmar compra</button>
          </div>
        </div>
      </form>
    </div>
  );
};
