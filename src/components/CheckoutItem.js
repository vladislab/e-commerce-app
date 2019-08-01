import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import { clearItemFromCart, addItemToCart } from "../redux/cart/cart.actions";

function CheckoutItem({ imageUrl, name, price, quantity, clearItem, addItem }) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove" onClick={() => clearItem(name)}>
        &#x2715;
      </span>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    clearItem: name => dispatch(clearItemFromCart(name)),
    addItem: name => dispatch(addItemToCart(name))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
