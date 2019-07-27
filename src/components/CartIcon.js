import React from "react";
import { ReactComponent as ShoppingIcon } from "../shopping-bag.svg";
import "./cart-icon.scss";
export default function CartIcon() {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
