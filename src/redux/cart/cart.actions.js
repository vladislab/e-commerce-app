export const toggleCartDropdown = () => ({
  type: "TOGGLE_CART_DROPDOWN"
});

export const addItemToCart = item => ({
  type: "ADD_ITEM",
  payload: item
});

export const clearItemFromCart = name => ({
  type: "CLEAR_ITEM",
  payload: name
});
