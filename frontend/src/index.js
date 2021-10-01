import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import productListReducer from './store/productListRedcer';
import productReducer from './store/productReducer';
import cartReducer from './store/cartReducer';
import signInReducer from './store/signReducer';
import registerReducer from './store/registerReducer';
import {BrowserRouter as Router} from 'react-router-dom';
import shippingReducer from './store/shippingReducer';
import paymentReducer from './store/paymentReducer';
import placeOrderReducer from './store/placeOrderReducer';
import orderSummaryReducer from './store/orderSummaryReducer';
import orderHistoryReducer from './store/orderHistoryReducer';
import {profileReducer,profileUpdateReducer} from './store/profileReducer';
import {createProductReducer} from './adminStore/reducers/createproduct';
import getProductReducer from './adminStore/reducers/getProduct';
import {editProductReducer} from './adminStore/reducers/editProduct';
const initialState = {
  cart: {
    cartItem: localStorage.getItem('cartItem')
      ? JSON.parse(localStorage.getItem('cartItem'))
      : [],
  },
  signIn:{
    userInfo:localStorage.getItem('userInfo')?
    JSON.parse(localStorage.getItem('userInfo')):null
  },
  shippingAddress:{
    shippingAddress:localStorage.getItem('shippingAddress')?
    JSON.parse(localStorage.getItem('shippingAddress')):null
  }
  
};

const rootReducer=combineReducers({
  pr:productListReducer,
  sp:productReducer,
  getProduct:getProductReducer,
  cart:cartReducer,
  signIn:signInReducer,
  register:registerReducer,
  shippingAddress:shippingReducer,
  paymentMethod:paymentReducer,
  order:placeOrderReducer,
  orderSummary:orderSummaryReducer,
  orderHistory:orderHistoryReducer,
  userProfile:profileReducer,
  userProfileUpdated:profileUpdateReducer,
  createProduct:createProductReducer,
  editProduct:editProductReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
