import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

import React from "react";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import SignInUpPage from "../pages/SignInUpPage";
import Checkout from "../pages/Checkout";

function Routes({ currentUser }) {
  return (
    <div>
      <Switch>
        <Route exact path={"/e-commerce-app"} component={HomePage} />
        <Route path={"/e-commerce-app/shop"} component={ShopPage} />
        <Route exact path={"/e-commerce-app/checkout"} component={Checkout} />
        <Route
          exact
          path={"/e-commerce-app/contact"}
          render={() => <h2>Page under construction!</h2>}
        />
        <Route
          exact
          path={"/e-commerce-app/signIn"}
          render={() =>
            currentUser ? <Redirect to={"/e-commerce-app"} /> : <SignInUpPage />
          }
        />
      </Switch>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Routes);
