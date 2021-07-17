import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { db } from "../firebase";
// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

export const ItemListContainer = ({ greeting }) => {
  //PRODUCTOS
  const [productos, setProductos] = useState([]);

  const getProducts = () =>{
    const docs = [];
    db.collection("productos").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(doc.id);
          console.log(doc.data());
          docs.push({...doc.data(), id: doc.id})
      });
      setProductos(docs);
    });
  };
  useEffect(() => {
    getProducts();
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
