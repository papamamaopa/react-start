import React from "react";

import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

import Nav from "./components/Nav";

import Home from "./pages/Home";

const Links = ["Start", "Link1", "Link2", "Link3"];
const brand = "BRAND";

export default () => {
  return (
    <Router history={history}>
      <Nav links={Links} brand={brand} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
