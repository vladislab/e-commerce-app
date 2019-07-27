import React from "react";
import { ReactComponent as ShoppingIcon } from "../shopping-bag.svg";
import "./cart-icon.scss";
import { toggleCartDropdown } from "../redux/cart/cart.actions";
import { connect } from "react-redux";

function CartIcon({ toggleCartDropdown }) {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
