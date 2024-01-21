import Axios from "axios";
import {createSlice} from "@reduxjs/toolkit";


export const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    error: "",
    newOrder: {},
 
    orders: []
  },
  reducers: {
    setLoading:(state)=> {
      state.loading = true
    },
    getOrders:(state, {payload})=> {
      state.loading = false;
      state.error = "";
      state.orders = payload
    },
    postOrder:(state, {payload})=> {
      state.loading = false;
      state.error = "";
      state.newOrder = payload;
    },
    removeOrder: (state, {payload})=> {
      state.loading = false;
      state.orders = payload;
      state.error = ""
    },
    setError: (state, {payload})=> {
      state.loading = false;
      state.error = payload
    }
  }
});

//Extract all actions from order reducer
export const {setLoading, getOrders, postOrder, removeOrder, setError} = orderSlice.actions;

//Get all orders
export const getAllOrders = ()=> {
  return async(dispatch)=> {
    try {
    dispatch(setLoading());
    const response = await Axios.get("/api/order");
    const { data } = response;
    dispatch(getOrders(data));
    }catch(error) {
      dispatch(setError(error));
    }
  }
} 

//post order action

export const postNewOrder = (newOrder)=> {
  return async(dispatch)=> {
    try {
      dispatch(setLoading())
      const response = await Axios.post("/api/order/add_order", newOrder);
      const { data } = response;
      dispatch(postOrder(data));
    }catch(error) {
      dispatch(setError(error));
    }
    
  }
};

//Remove order by id
export const removeOrderById = (orderId)=> {
  return async(dispatch)=> {
    try {
    dispatch(setLoading());
    const  response = await Axios.delete(`/api/order/${orderId}`);
    const data = response.data;
    dispatch(removeOrder(data.orders ));
    }catch(error) {
      dispatch(setError(error))
    }
  }
};

export default orderSlice.reducer;