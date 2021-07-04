import React from "react";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./css/NavBar.css";
import "bulma/css/bulma.css";

export const CoderApp = () => {
  const greeting = "Productos destacados";
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting={greeting} />
          </Route>
          <Route path="/"> </Route>
          <Route path="/"> </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
