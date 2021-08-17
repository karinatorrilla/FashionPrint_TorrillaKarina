import React, { useState, useEffect } from "react";
import { FormCheckout } from "./FormCheckout";
import { db } from "../../firebase";
export const ValidateBuy = () => {
    const [setProducts] = useState([]);
    const buyItems = async (item) => {
        await db.collection("compras").doc().set(item);
    };

    const getItems = () => {
        db.collection("compras").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducts(docs);
        });
    };
    useEffect(() => {
        getItems();
    }, []);
    return (
        <div>
            <FormCheckout buyItems={buyItems} />
        </div>
    );
};

export default ValidateBuy;
