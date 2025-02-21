const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const { element, quantity, totalPrice } = action.payload;
            const newItem = { element, quantity, totalPrice };
            return {
                ...state,
                cartItems: [...state.cartItems, newItem],
            };
        case 'RESET':
            return {
                ...state,
                cartItems: [],
            }
        case 'DECREASE_QUANTITY':
            const elementToDecrease = action.payload.element;
            const updatedCartItems = state.cartItems.map((item) => {
                if (item.element === elementToDecrease) {
                    const updatedQuantity = item.quantity - 1;
                    const updatedTotalPrice = updatedQuantity * item.element.price;
                    if (updatedQuantity <= 0) {
                        return null;
                    }
                    return {
                        ...item,
                        quantity: updatedQuantity,
                        totalPrice: updatedTotalPrice,
                    };
                }
                return item;
            });

            const filteredCartItems = updatedCartItems.filter((item) => item !== null);

            return {
                ...state,
                cartItems: filteredCartItems,
            };
        
            case 'INCREASE_QUANTITY':
                const elementToIncrease = action.payload.element;
                const updateCartItems = state.cartItems.map((item) => {
                  if (item.element === elementToIncrease) {
                    const updatedQuantity = item.quantity + 1;
                    const updatedTotalPrice = updatedQuantity * item.element.price;
                    return {
                      ...item,
                      quantity: updatedQuantity,
                      totalPrice: updatedTotalPrice,
                    };
                  }
                  return item;
                });
              
                return {
                  ...state,
                  cartItems: updateCartItems,
                };
        default:
            return state;
    }
};

export default cartReducer;
