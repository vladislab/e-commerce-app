import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "./CustomButton";
import { connect } from "react-redux";
import { addItemToCart } from "../redux/cart/cart.actions";

function CollectionItem({ id, name, imageUrl, price, addItemToCart }) {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <CustomButton
        inverted
        className="custom-button"
        onClick={() => addItemToCart({ id, name, price, imageUrl })}
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return { addItemToCart: item => dispatch(addItemToCart(item)) };
};

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
