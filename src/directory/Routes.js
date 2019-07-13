import { Route, Switch } from "react-router-dom";

import React from "react";
import HomePage from "../pages/HomePage";
import HatsPage from "../pages/HatsPage";
import JacketsPage from "../pages/JacketsPage";
import SneakersPage from "../pages/SneakersPage";
import WomensPage from "../pages/WomensPage";
import MensPage from "../pages/MensPage";
import ShopPage from "../pages/ShopPage";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route exact path="/shop/jackets" component={JacketsPage} />
        <Route exact path="/shop/sneakers" component={SneakersPage} />
        <Route exact path="/shop/womens" component={WomensPage} />
        <Route exact path="/shop/mens" component={MensPage} />
      </Switch>
    </div>
  );
}
