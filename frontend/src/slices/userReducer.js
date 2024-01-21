import Axios from "axios";
import {createSlice} from "@reduxjs/toolkit";
import { removeAllItems } from "./cartReducer";
import { DialogContent } from "@mui/material";

export const userSlice = createSlice({
  name: "userSignIn",
  initialState: {
    isLoading: false,
    userInfo: {},
   users: [],
    error: {}
  }, 
  reducers: {
    setLoading:(state, {payload})=> {
      state.isLoading = true;  
    },
    register:(state, {payload})=> {
      state.isLoading = false;  
      state.userInfo = payload;
      
    },
    setError:(state, {payload})=> {
      state.isLoading = false;  
      state.error = payload;
      state.userInfo = {};
    },
    setUsers:(state, {payload})=> {
      state.isLoading = false;
      state.error = "";
      state.users = payload
    },
   login:(state, {payload})=> {
     state.isLoading = false;  
     state.userInfo = payload;
   },
   logout:(state, {payload})=> {
    state.isLoading = false;  
    state.userInfo = {};
  }
  }
});

const {setLoading, setUsers, register, login, logout, setError} = userSlice.actions;

export const registerClient = ({firstName, lastName, email, password})=> {
  return async(dispatch)=> {
    try {
      dispatch(setLoading());
      const response = await Axios.post("/api/users/register", {firstName, lastName, email, password});
      if(response.data.message === "fail") {
          setError(response.data.errors)
      }
      if(response.data.message === "success") {
      dispatch(register(response.data));
      }
      dispatch(setLoading())
    } catch(error) {
      dispatch(setError(error));
    }
  }

};

export const loginClient = ( email, password)=> {
  return async(dispatch)=> {
    try {
      dispatch(setLoading());
      const response = await Axios.post("/api/users/login", {email, password});
     if(response.data.message === "fail") {
       dispatch(setError(response.data.errors));
     }
     if(response.data.message === "success") {
      dispatch(login(response.data.userDetails));

     }
    } catch(error) {
      dispatch(setError(error));
    }
  }
};

export const logoutClient =()=>  {
  return(dispatch)=> {
  
  dispatch(logout());
  dispatch(removeAllItems());

  }
  localStorage.removeItem("persist:userSignIn");

};

export const getAllUsers = (dispatch)=> {
  return async(dispatch)=> {
    try {
    dispatch(setLoading())
    const response = await Axios.get("/api/users");
      dispatch(setUsers(response.data))
    }catch(error) {
      dispatch(setError(error));
    }
  }
}

 const userReducer = userSlice.reducer;
 export default userReducer; 