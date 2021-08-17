import React from "react";
import FormCheckout from "../Checkout/FormCheckout";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <>
      <div>
        <Link to={`/checkout/`}>
          <span className="icon-text">
            <span className="icon">
              <i className="fas fa-shopping-bag"></i>
            </span>
            <span>Bag</span>
          </span>
        </Link>
      </div>
    </>
  );
};
