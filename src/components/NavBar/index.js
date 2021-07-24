import React from "react";
import { CartWidget } from "../CartWidget/index.js";
import logo_wonder from "../../assets/img/logo_wonder.png";
import "./NavBar.css";

export const NavBar = () => {
  const openBurgerNav = () => {
    document.getElementById("header_burger_menu").style.display =
      "inline-block";
  };
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
                  <p className="txt_sub_menu_header"> Contacto </p>
                </li>
                <li className="estilo_lista_submenu_header">
                  <p className="txt_sub_menu_header"> Usuario </p>
                </li>
                <li className="estilo_lista_submenu_header">
                  <p className="txt_sub_menu_header"> Bag </p>
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
                className="navbar-item is-active"
                href="/"
                id="menu_padre_producto"
              >
                Productos
                <div id="header_menu_lista_producto">
                  <ul className="body_header_lista_oculta">
                    <li className="estilo_lista_submenu_header">
                      <span className="txt_sub_menu_header"> Camperas </span>
                    </li>
                    <li className="estilo_lista_submenu_header">
                      <span className="txt_sub_menu_header"> Buzos </span>
                    </li>
                    <li className="estilo_lista_submenu_header">
                      <span className="txt_sub_menu_header"> Camisas </span>
                    </li>
                  </ul>
                </div>
              </a>
              <a className="navbar-item" href="/">
                Contacto
              </a>
              <a className="navbar-item cntent_after_line" href="/">
                <span className="icon-text">
                  <span className="icon">
                    <i className="fas fa-user"></i>
                  </span>
                  <span>Usuario</span>
                </span>
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
