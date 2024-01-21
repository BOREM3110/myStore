import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.js";
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from "./store";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {persistStore} from 'redux-persist';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>

  
    <Provider store={store} >
    <PersistGate loading={<h1>loading....</h1>} persistor={persistor} >
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
      
    </PersistGate>
      </Provider>
     
   
     
    </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

