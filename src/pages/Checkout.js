import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";

import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

function Checkout({ cartItems, totalPrice }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItems => cartItems.name)}
      <div className="total">
        <span>Total: ${totalPrice}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
