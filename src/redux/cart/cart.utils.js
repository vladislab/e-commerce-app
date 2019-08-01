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

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.name === itemToRemove.name
  );

  if (existingCartItem) {
    if (existingCartItem.quantity > 1)
      return cartItems.map(cartItem =>
        cartItem.name === itemToRemove.name
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1
            }
          : cartItem
      );
    else return clearItemFromCart(cartItems, existingCartItem.name);
  }
};

export const clearItemFromCart = (cartItems, name) => {
  return cartItems.filter(item => item.name !== name);
};
