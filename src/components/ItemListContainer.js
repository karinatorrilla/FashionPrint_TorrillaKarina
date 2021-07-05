import React, { useState, useEffect } from "react";
import { ProductosApp } from "./ProductosApp";
import { ItemList } from "./ItemList";
// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  //PRODUCTOS
  const [productos, setProductos] = useState([]);

  //promesa
  const promiseCargando = () => {
    return new Promise((resolve, reject) => {
      //aca va a ir la consulta a la API simulada
      setTimeout(() => {
        setItems(items);
        resolve(ProductosApp);
      }, 2000);
    });
  };

  // const consultaPromesa = () => {

  // };
  useEffect(() => {
    promiseCargando().then((data) => {
      const productoFiltrado = data.filter((producto) => producto.destacado);
      setProductos(productoFiltrado);
    });
  }, []);
  return (
    <>
      {productos.length === 0 ? (
        <h1 className="title_home">Cargando...</h1>
      ) : (
        <>
          <div id="content_body_page">
            <h2 className="title_home">
              {greeting} <i className="fas fa-fire"></i>
            </h2>
            <div className="_padding_box">
              <div className="columns is-multiline ">
                {productos.map((producto) => (
                  <ItemList key={producto.id} {...producto} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
