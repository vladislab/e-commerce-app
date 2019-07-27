import React from "react";
import "./header.styles.scss";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./crown.svg";
import { connect } from "react-redux";

import { auth } from "../firebase/firebase.utils";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

function Navbar({ currentUser, cartHidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <NavLink to="/shop" className="option" activeClassName="active">
          SHOP
        </NavLink>
        <NavLink to="/contact" className="option" activeClassName="active">
          CONTACT
        </NavLink>
        {currentUser === null ? (
          <Link to="/signIn" className="option">
            SIGN IN
          </Link>
        ) : (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        )}
        <CartIcon />
      </div>
      {cartHidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = state => {
  return { currentUser: state.user.currentUser, cartHidden: state.cart.hidden };
};
export default connect(mapStateToProps)(Navbar);
