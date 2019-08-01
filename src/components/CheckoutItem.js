import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart
} from "../redux/cart/cart.actions";

function CheckoutItem({ cartItem, addItem, removeItem, clearItem }) {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => removeItem(cartItem)}>
          &#x276E;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItem(cartItem)}>
          &#x276F;
        </span>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(name)}>
        &#x2715;
      </span>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    clearItem: itemName => dispatch(clearItemFromCart(itemName)),
    addItem: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(removeItemFromCart(item))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
