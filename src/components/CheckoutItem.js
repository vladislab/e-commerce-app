import React from "react";
import "./checkout-item.styles.scss";

export default function CheckoutItem({
  imageUrl,
  name,
  price,
  quantity,
  ...otherProps
}) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove">&#x2715;</span>
    </div>
  );
}
