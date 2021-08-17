import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/index.js";
import { db } from "../../firebase";

export const ItemListContainer = ({ greeting}) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      const docs = [];
      db.collection("productos").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProductos(docs);
      });
    };
    getProducts();
  }, []);
  return (
    <>
      {productos.length === 0 ? (
        <h1 className="title_home">Cargando...</h1>
      ) : (
        <>
          <div id="content_body_page">
            <h2 className="title_home">{greeting}</h2>
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
export default ItemListContainer;
