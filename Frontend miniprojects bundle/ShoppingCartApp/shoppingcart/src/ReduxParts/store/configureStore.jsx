import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  }, applyMiddleware(thunk));
  return store;
};

export default configureAppStore();