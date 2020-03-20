import {combineReducers , createStore , applyMiddleware} from 'redux' ;
import thunk from 'redux-thunk';


import selector from './categories-store.js';
import list from './products-store.js';
import cart from './cart-store.js';




let reducers = combineReducers({selector , list, cart});

const store = ()=> {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store() ;