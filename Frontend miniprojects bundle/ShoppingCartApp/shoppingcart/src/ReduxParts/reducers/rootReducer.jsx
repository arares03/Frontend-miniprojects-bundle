import { combineReducers } from 'redux';
import numOfItemsReducer from './numOfItemsReducer';
import elementListReducer from './ElementListReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    numOfItems: numOfItemsReducer,
    elementsList: elementListReducer,
    cart: cartReducer,
});

export default rootReducer;