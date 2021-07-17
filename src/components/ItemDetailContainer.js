//ACA DEBO HACER LO MISMO CON ITEMS LIST CONTAINER, AGREGARLE UNA PROMESA QUE MUESTRE EL EFECTO DE CARGANDO
import React, { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [producto, setProducto] = useState([]);

 

  return (
    <>
      <ItemDetail {...producto} />
    </>
  );
};
