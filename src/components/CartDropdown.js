import React from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "./CustomButton";
import "./cart-dropdown.styles.scss";
import CartItem from "./CartItem";

function CartDropdown({ items, history }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map(item => <CartItem key={item.id} {...item} />)
        ) : (
          <span className="empty-message">EMPTY CART</span>
        )}
      </div>
      <CustomButton onClick={() => history.push("/checkout")}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}
export default withRouter(CartDropdown);
