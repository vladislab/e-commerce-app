import React from "react";

import CustomButton from "./CustomButton";
import "./cart-dropdown.styles.scss";
import CartItem from "./CartItem";

export default function CartDropdown({ items }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}
