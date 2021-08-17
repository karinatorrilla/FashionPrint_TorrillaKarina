//ACA DEBO HACER LO MISMO CON ITEMS LIST CONTAINER, AGREGARLE UNA PROMESA QUE MUESTRE EL EFECTO DE CARGANDO
import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.js";
import { db } from "../../firebase";

export const ItemDetailContainer = ({ match }) => {
  const [detailMatch, setDetailMatch] = useState([]);

  useEffect(() => {
    const getItem = () => {
        db.collection("productos")
            .doc(match.params.id)
            .get()
            .then((querySnapshot) => {
                setDetailMatch(querySnapshot.data());
            });
    };
    getItem();
  }, [match]);


  return (
    <>
      <ItemDetail  producto = { detailMatch } />
    </>
  );
};
export default ItemDetailContainer;
