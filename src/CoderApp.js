import React from "react";
import { NavBar } from "./components/NavBar/index.js";
import { ItemListContainer } from "./components/ItemListContainer/index.js";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer.js";
import { FormCheckout } from "./components/Checkout/FormCheckout.js";
import { BagProvider } from "./components/Context/CardContext.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ItemListContainerCategory } from "./components/ItemListContainerCategory/Index.js";

import "bulma/css/bulma.css";

export const CoderApp = () => {
    const greeting = "Fashion Print";
    return (
        <>
            <BagProvider>
                <BrowserRouter>
                    <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <ItemListContainer greeting={greeting} />
                        </Route>
                        <Route
                            path="/producto/:id"
                            component={ItemDetailContainer}
                        />
                        <Route
                            path="/categoria/:idCategory"
                            component={ItemListContainerCategory}
                        />
                        <Route path="/checkout" component={FormCheckout} />
                    </Switch>
                </BrowserRouter>
            </BagProvider>
        </>
    );
};
export default CoderApp;
