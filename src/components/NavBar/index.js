import { CartWidget } from "../CartWidget/index.js";
import { ItemCategories } from "./itemCategories/ItemCategories.js";
import logo_wonder from "../../assets/img/logo_wonder.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <>
            <nav
                className="navbar is-dark"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-menu">
                    <div className="lado_izquierdo">
                        <figure className="logo_img">
                            <Link to="/">
                                <img src={logo_wonder} alt="logo" />
                            </Link>
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
                                            <i
                                                className="fas fa-search"
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <span
                                className="navbar-item is-active cntent_after_line"
                                href="/"
                                id="menu_padre_producto"
                            >
                                Productos
                                <div id="header_menu_lista_producto">
                                    <ul className="body_header_lista_oculta">
                                        <ItemCategories />
                                    </ul>
                                </div>
                            </span>
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
