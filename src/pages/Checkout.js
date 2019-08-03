import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";

import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../components/CheckoutItem";
import StripeCheckoutButton from "../components/stripe-button/StripeCheckoutButton";

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
      {cartItems.map(cartItems => (
        <CheckoutItem cartItem={cartItems} key={cartItems.id} />
      ))}
      <div className="total">
        <span>Total: ${totalPrice}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
