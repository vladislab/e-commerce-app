import React from "react";
import "./header.styles.scss";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./crown.svg";

import { auth } from "../firebase/firebase.utils";

export default function Navbar({ currentUser }) {
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
        <NavLink to="/cart" className="option" activeClassName="active">
          CART
        </NavLink>
      </div>
    </div>
  );
}
