//ACA DEBO HACER LO MISMO CON ITEMS LIST CONTAINER, AGREGARLE UNA PROMESA QUE MUESTRE EL EFECTO DE CARGANDO
import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.js";
import ItemListContainer from "../ItemListContainer/index.js";
import ItemList from "../ItemList/index.js";
import { db } from "../../firebase";

export const ItemDetailContainer = ({ match }) => {
  const [detailMatch, setDetailMatch] = useState([]);
    useEffect(() => {
        const getItem = () => {
            const findMatch = (res) => {
                const results = res.filter(function (detail) {
                    return detail.id === match.params.id;
                });
                const firstObj = results.length > 0 ? results[0] : null;
                setDetailMatch(firstObj);
            };
            const docs = [];
            db.collection("productos").onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id });
                });
                findMatch(docs);
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
