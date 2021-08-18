import React from "react";
import { Link } from "react-router-dom";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <>
      <div className="navbar-item" id="bag_container">
        <Link to={`/checkout/`}>
          <span className="icon-text">
            <span className="icon">
              <i className="fas fa-shopping-bag"></i>
            </span>
          </span>
        </Link>
      </div>
    </>
  );
};
