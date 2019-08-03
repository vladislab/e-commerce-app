import React from "react";
import "./header.styles.scss";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./crown.svg";
import { connect } from "react-redux";
import { selectCartItems } from "../redux/cart/cart.selectors";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { selectCartHidden } from "../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import { auth } from "../firebase/firebase.utils";

import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

function Navbar({ currentUser, cartHidden, cartItems }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/e-commerce-app/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <NavLink
          to="/e-commerce-app/shop/"
          className="option"
          activeClassName="active"
        >
          SHOP
        </NavLink>
        <NavLink
          to="/e-commerce-app/contact/"
          className="option"
          activeClassName="active"
        >
          CONTACT
        </NavLink>
        {currentUser === null ? (
          <Link to="/e-commerce-app/signIn/" className="option">
            SIGN IN
          </Link>
        ) : (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        )}
        <CartIcon />
      </div>
      {cartHidden ? null : <CartDropdown items={cartItems} />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
  cartItems: selectCartItems
});
export default connect(mapStateToProps)(Navbar);
