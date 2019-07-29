import React from "react";
import { ReactComponent as ShoppingIcon } from "../shopping-bag.svg";
import "./cart-icon.scss";
import { toggleCartDropdown } from "../redux/cart/cart.actions";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

function CartIcon({ toggleCartDropdown, totalItems }) {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItems}</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  totalItems: selectCartItemsCount
});

const mapDispatchToProps = dispatch => {
  return {
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
