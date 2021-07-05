//ACA DEBO HACER LO MISMO CON ITEMS LIST CONTAINER, AGREGARLE UNA PROMESA QUE MUESTRE EL EFECTO DE CARGANDO
import React, { useState, useEffect } from "react";
import { ProductosApp } from "./ProductosApp";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [producto, setProducto] = useState([]);

  const promiseLoading = () => {
    return new Promise((resolve, reject) => {
      //aca va a ir la consulta a la API simulada
      setTimeout(() => {
        setItem(item);
        resolve(ProductosApp);
      }, 2000);
    });
  };
  const traePromesa = () => {
    promiseLoading().then((data) => {
      const productoFiltrado = data.find((producto) => producto.id === +id);
      setProducto(productoFiltrado);
    });
  };
  useEffect(() => {
    (async () => {
      traePromesa();
    })();
  }, [id]);
  return (
    <>
      <ItemDetail {...producto} />
    </>
  );
};
