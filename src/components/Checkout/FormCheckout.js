import React, { useState } from "react";
import { useContext } from "react";
import { BagContext } from "../Context/CardContext";
import { db } from "../../firebase";
import { CountButtonCheckout } from "../ItemDetail/CountButtonCheckout";
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
        <div>
            {orderId !== false && (
                <p>Compra exitosa. Número de orden: {orderId}</p>
            )}
            <ul>
                {bagg.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.nombre} - {item.precio} - {item.cantidad} -
                            total: {item.cantidad * item.precio}
                            <CountButtonCheckout producto={item} />
                        </li>
                    );
                })}
            </ul>
            <p>total: {totalValor}</p>
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
                        <button className="button is-link">
                            Confirmar compra
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
