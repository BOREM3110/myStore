import {createSlice} from "@reduxjs/toolkit";
import Axios from "axios";



const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    allCategories: [],
  isLoading: false,
  error: false
  },
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    getAllCategories: (state, {payload})=> {
      state.isLoading = false;
      state.allCategories = payload;
      state.error = false
    },
    setError: (state)=> {
      state.error = true
    }
  },
})


export const {setLoading, getAllCategories, setError} = categoriesSlice.actions;
// fetch all categories
export function getCategories() {
  return async (dispatch) => {
    dispatch(setLoading());
    Axios
      .get("/api/categories")
      .then((response) => {
        dispatch(getAllCategories(response.data));
      })
      .catch((err) => {
        dispatch(setError());
      });
  }
};
export  default categoriesSlice.reducer;