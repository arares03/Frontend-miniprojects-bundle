const initialState = {
  numOfItems: 0,
};

const numOfItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NUM_OF_ITEMS':
      return {
        ...state,
        numOfItems: action.payload,
      };
    default:
      return state;
  }
};

export default numOfItemsReducer;