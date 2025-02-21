export const addToCart = (element, quantity) => ({
  type: 'ADD_TO_CART',
  payload: { element, quantity, totalPrice: element.price * quantity },
});

export const resetCart = () => ({
  type: 'RESET',
  payload: {},
});

export const decreaseQuantity = (element) => ({
  type: 'DECREASE_QUANTITY',
  payload: { element },
});

export const increaseQuantity = (element) => ({
  type: 'INCREASE_QUANTITY',
  payload: { element },
});