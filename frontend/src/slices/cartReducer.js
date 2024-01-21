import Axios from "axios";
import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    res: "",
    cartItems: [],
   error: ""
  },
  reducers: {
    setLoading:(state)=> {
      state.loading = true;
    },
    removeItemCart:(state, {payload})=> {
      const existItem = state.cartItems.find((item)=> item.productId === payload);
      let indexExistItem = state.cartItems.indexOf(existItem);
      
      if(existItem) {
        
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        const filteredCart = state.cartItems.filter((item)=> item !== null);
        filteredCart.splice(indexExistItem, 1);
        state.loading = false;
       state.cartItems = filteredCart;
        state.error = ""
      }
      if(state.cartItems.length === 0) {
         
        localStorage.removeItem("cartItems");
      }
    
    },
  
    addQuantity: (state, {payload}) => {
      const productExist = state.cartItems.find((y)=> y.productId === payload);
      let newCarts = state.cartItems.filter((item)=> item !== null).map((k)=> { 
       if(k.productId === productExist.productId) { 
          k.quantity += 1 
          
       } else {
          
          k.quantity += 0; 
       }  
      
       return k;
    })
   localStorage.setItem("cartItems", JSON.stringify(newCarts));
      state.loading = false;
      state.res = "";
      state.error = "";
      state.cartItems = newCarts;
      
    },
   minimizeQuantity: (state, {payload})=> {
    
    const productExist =  state.cartItems.find((y)=> y.productId === payload);
      let nouvelCarts = state.cartItems.map((k)=> { 
        if(k.productId === productExist.productId) {
          k.quantity -= 1;
        
      }else {
        k.quantity += 0;
      } 
          return k
    })
    localStorage.setItem("cartItems", JSON.stringify(nouvelCarts))
      state.loading = false;
      state.res = "";
      state.error = "";
      state.cartItems = nouvelCarts.filter((k)=> k.quantity > 0 );
    
   
   },
   addToCart:(state, {payload})=> {
    let cartItems = [];
    let newCart = {
      productId:  payload.id,
      name: payload.name,
      description: payload.description,
      image: payload.image,
      quantity: payload.quantity,
      price: payload.price
    }
    const existItem = state.cartItems.find((x)=> x.productId === newCart.productId);
    if(existItem) {
      state.loading = false;
      
    }else {
   
     
    state.loading = false;
    state.error = "";
    state.cartItems = [...state.cartItems, newCart];
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }
   },
  saveAddressShip: (state, {payload})=> {
    state.error = "";
    state.shippingAddress = payload;
  },
  removeAllItems: (state, {payload})=> {
 state.error = "";
 state.loading = false;
 state.cartItems = [];
  }, 
    setError: (state, {payload})=> {
      state.error = payload;
    }
  }
});

export const {setLoading, minimizeQuantity, addQuantity, removeItemCart, getCart, addToCart, setError, saveAddressShip, removeAllItems} = cartSlice.actions;


export const getCartItems = () => {
  return async(dispatch)=> {
      try {
        dispatch(setLoading());
          const {data} = await Axios.get("/api/carts");
          dispatch(getCart(data))
      } catch(error) {
          dispatch(setError(error))
      }
  }
};

export const minimizeQuantityItem = (productId) => {
  return (dispatch)=> {
      try {
       
          dispatch(minimizeQuantity(productId))
      } catch(error) {
          dispatch(setError(error))
      }
  }
};

export const addToCartItem = (product)=>  {
  return(dispatch)=> {
    dispatch(addToCart(product));

  }

}
export const addCartQuantity = (productId) => {
  return async(dispatch)=> {
      try {
       
        dispatch(addQuantity(productId))
           
      } catch(error) {
          dispatch(setError(error))
      }
  }
};

export const removeCartItem = (productId)=> {
  return (dispatch)=> {
    dispatch(removeItemCart(productId));
  }
}

export const saveShipAddress = (data)=> {
  return (dispatch)=> dispatch(saveAddressShip(data));
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export default cartSlice.reducer;

