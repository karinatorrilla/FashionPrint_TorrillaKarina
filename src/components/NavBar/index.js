import React, { useState, useEffect } from "react";
import { CartWidget } from "../CartWidget/index.js";
import logo_wonder from "../../assets/img/logo_wonder.png";
import "./NavBar.css";
import { db } from "../../firebase";

export const NavBar = () => {
  const openBurgerNav = () => {
    document.getElementById("header_burger_menu").style.display =
      "inline-block";
  };
  const [productos, setProductos] = useState([]);

  // let nro_categoria = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const getProducts = () => {
      const docs = [];
      db.collection("productos").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.id);
          // console.log(doc.data());
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProductos(docs);
      });
    };
    getProducts();
  }, []);
  return (
    <>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            href="/"
            id="menu_burger_padre"
            onClick={openBurgerNav}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <div id="header_burger_menu">
              <ul className="body_header_lista_oculta">
                <li className="estilo_lista_submenu_header">
                  <p className="txt_sub_menu_header"> Productos </p>
                </li>
                <li className="estilo_lista_submenu_header">
                  <p className="txt_sub_menu_header">
                    {" "}
                    <CartWidget />{" "}
                  </p>
                </li>
              </ul>
            </div>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="lado_izquierdo">
            <figure className="logo_img">
              <img src={logo_wonder} alt="logo" />
            </figure>
          </div>
          <div className="lado_derecho">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="panel-block">
                  <p className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      placeholder="Buscar.."
                    />
                    <span className="icon is-left">
                      <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                  </p>
                </div>
              </div>
              <a
                className="navbar-item is-active cntent_after_line"
                href="/"
                id="menu_padre_producto"
              >
                Productos
                <div id="header_menu_lista_producto">
                  <ul className="body_header_lista_oculta">
                    <li className="estilo_lista_submenu_header">
                      <span className="txt_sub_menu_header">CAMISAS</span>
                    </li>
                    <li className="estilo_lista_submenu_header">
                      <span className="txt_sub_menu_header">JEANS</span>
                    </li>
                    <li className="estilo_lista_submenu_header">
                      <span className="txt_sub_menu_header">REMERAS</span>
                    </li>
                    <li className="estilo_lista_submenu_header">
                      <span className="txt_sub_menu_header">VESTIDOS</span>
                    </li>
                    <li className="estilo_lista_submenu_header">
                      <span className="txt_sub_menu_header">CHAQUETAS</span>
                    </li>
                    <li className="estilo_lista_submenu_header">
                      <span className="txt_sub_menu_header">BUZOS</span>
                    </li>

                    {/* {productos.map((producto) => (
                      <li
                        className="estilo_lista_submenu_header"
                        key={producto.id_categoria}
                      >
                        <span className="txt_sub_menu_header">
                          {producto.categoria}
                        </span>
                      </li>
                    ))} */}
                  </ul>
                </div>
              </a>
              <a className="navbar-item" href="/">
                <CartWidget />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
