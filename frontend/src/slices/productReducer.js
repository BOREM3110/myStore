import Axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    product: {},
    error: ""
  },
  reducers: {
    setLoading: (state)=> {
      state.loading = true
    },
    setProduct: (state, {payload})=> {
      state.loading = false;
      state.product = payload;
      state.error = ""
    },
   
    setErrorProduct: (state, {payload})=> {
      state.loading = false;
      state.error = payload;
    }
  }
});

//export actions to get product
 const {setLoading, setProduct, setErrorProduct} = productSlice.actions;

//Get product by id
export const getProductById = (id) => {
  return async(dispatch) => {
 try {
    dispatch(setLoading())
    
      const response = await Axios.get(`/api/products/${id}`);
      
      if(response.status === 200) {
       const data = await response.data;
       dispatch(setProduct(data))
      }
     
       
throw new Error("product does not exist!")
    }catch(error) {
      let errorProduct = error.response && error.response.data.message ? error.response.data.message : error.message;
      setErrorProduct(errorProduct)
    }
  }
};

export default productSlice.reducer;
