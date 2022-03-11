import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import UserReducer from './users'
import productsReducer from './productsReducer';
import SingleProductReducer from './singleProduct';

const reducer = combineReducers({
  auth: auth,
  allUsers: UserReducer,
  allProducts: productsReducer,
  singleProduct: SingleProductReducer
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
