import Axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    products: [],
    error: ""
  },
  reducers: {
    loadProduct:(state)=>{
      state.isLoading = true
    },
   
    getAllProducts: (state, {payload})=> {
      state.isLoading = false;
      state.products = payload;
      state.error = "";
    },
    getProductsByCategory: (state, {payload})=> {
      state.isLoading = false;
      state.products = payload;
      state.error = ""
    },
    setErrorProducts: (state, {payload})=> {
      state.error = payload;
    }
  }
});

export const {loadProduct, getAllProducts, setErrorProducts, getProductsByCategory} = productsSlice.actions;


//Fetch all products 
export const getProducts = ()=> {
  return async(dispatch)=> {
    dispatch(loadProduct());
    Axios.get("/api/products").then((response)=> {
       dispatch(getAllProducts(response.data.products));
    }).catch(error => dispatch(setErrorProducts(error)))
  }

};

export const getProductsByCategoryId =(categoryId)=> {
  return async(dispatch)=> {
    try {
    dispatch(loadProduct());
    const response = await Axios.get(`/api/products/${categoryId}`);
      dispatch(getProductsByCategory());
    }catch(error){
      dispatch(setErrorProducts(error));
    }
  }
};

export default productsSlice.reducer;