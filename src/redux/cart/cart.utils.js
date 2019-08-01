export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.name === itemToAdd.name
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.name === itemToAdd.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, name) => {
  return cartItems.filter(item => item.name !== name);
};
