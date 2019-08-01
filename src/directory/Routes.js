import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

import React from "react";
import HomePage from "../pages/HomePage";
import HatsPage from "../pages/HatsPage";
import JacketsPage from "../pages/JacketsPage";
import SneakersPage from "../pages/SneakersPage";
import WomensPage from "../pages/WomensPage";
import MensPage from "../pages/MensPage";
import ShopPage from "../pages/ShopPage";
import SignInUpPage from "../pages/SignInUpPage";
import Checkout from "../pages/Checkout";

function Routes({ currentUser }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        {/* <Route exact path="/shop/hats" component={HatsPage} />
        <Route exact path="/shop/jackets" component={JacketsPage} />
        <Route exact path="/shop/sneakers" component={SneakersPage} />
        <Route exact path="/shop/womens" component={WomensPage} />
        <Route exact path="/shop/mens" component={MensPage} /> */}
        <Route
          exact
          path="/signIn"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInUpPage />)}
        />
      </Switch>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Routes);
