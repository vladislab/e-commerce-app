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
        <Route exact path={process.env.PUBLIC_URL + "/"} component={HomePage} />
        <Route path={process.env.PUBLIC_URL + "/shop"} component={ShopPage} />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/checkout"}
          component={Checkout}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/signIn"}
          render={() =>
            currentUser ? (
              <Redirect to={process.env.PUBLIC_URL + "/"} />
            ) : (
              <SignInUpPage />
            )
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
