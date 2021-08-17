import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList';
import { db } from '../../firebase';

export const ItemListContainerCategory = ({match}) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const getItem = () => {
            const docs = [];
            db.collection("productos")
                .where("id_categoria", "==", +match.params.idCategory)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        docs.push({ ...doc.data(), id: doc.id });
                    });
                    setProductos(docs);
                })
                .catch((error) => {
                    alert("Error getting documents: ", error);
                });
        };
        getItem();
    }, [match]);

    return (
      <>
        {productos.length === 0 ? (
          <h1 className="title_home">Cargando...</h1>
        ) : (
          <>
            <div id="content_body_page">
              <h2 className="title_home">nombre</h2>
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
}
