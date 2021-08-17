import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../../firebase';

export const ItemCategories = () => {
    const [categorias, setCategorias] = useState([])
    useEffect(() => {
      const getCategories = () => {
        const docs = [];
        db.collection("categorias").onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          setCategorias(docs);
        });
      };
      getCategories();
    }, []);
    return (
        <>
            {categorias.map((categoria) => (
              <Link to={`/categoria/${categoria.id}`} key={categoria.id}>
                      <li
                        className="estilo_lista_submenu_header"
                      >
                        <span className="txt_sub_menu_header">
                          {categoria.categoria}
                        </span>
                      </li>
              </Link>

                    ))}
        </>
    )
}
