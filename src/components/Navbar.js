import React from "react";
import "./header.styles.scss";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./crown.svg";

export default function Navbar() {
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
        <NavLink to="/signIn" className="option" activeClassName="active">
          SIGN IN
        </NavLink>
        <NavLink to="/cart" className="option" activeClassName="active">
          CART
        </NavLink>
      </div>
    </div>
  );
}
