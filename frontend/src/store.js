import {compose, applyMiddleware} from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import categoriesReducer from "./slices/categoriesReducer";
import productsReducer, { resetAllProducts } from "./slices/productsReducer";
import productReducer from "./slices/productReducer";
import cartReducer from "./slices/cartReducer";
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer, FLUSH , REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";
import userReducer from "./slices/userReducer";
import orderReducer from "./slices/orderReducer";

const persistConfig = {
  key: "root",
 version: 3,
  storage,
  
};






const preloadedState = {
 cart: {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")): []
 },

  allProducts: localStorage.getItem("allProducts") ? JSON.parse(localStorage.getItem("allProducts")) : [],
 userSignIn: localStorage.getItem("userSignIn") ? JSON.parse(localStorage.getItem("userSignIn")) : [],
 order: localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : {}
};



const rootReducer =  combineReducers({
 categories: categoriesReducer,
 allProducts: productsReducer, 
 productDetails: productReducer,
 cart: cartReducer,
 userSignIn: userReducer,
 order: orderReducer
 
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhance = composeEnhancer(applyMiddleware(thunk));
 


  export let store = configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware  => getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH , REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  })
  export const persistor = persistStore(store)
  /*store.subscribe(()=> {
    const state = store.getState();
    console.log(state)
  })*/