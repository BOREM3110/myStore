import { Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import RegisterPage from "../screens/RegisterPage";

import { useSelector } from "react-redux";
import Products from "../pages/Products";
import Home from "../pages/Home";
import ProductScreen from "../pages/ProductScreen";
import CartScreen from "../pages/CartScreen";
import Dashboard from "../admin/dashboard/Dashboard";
import AddCategory from "../admin/AddCategory";
import AddProduct from "../admin/AddProduct";
import AllCategories from "../admin/AllCategories";
import AllProducts from "../admin/AllProducts";
import Users from "../admin/Users";
import Orders from "../admin/Orders";
import OrderScreen from "../screens/OrderScreen";
import PaymentScreen from "../screens/PaymentScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import Product from "../pages/Product";




export const Routers = ()=> {
  const userSignIn = useSelector((state)=> state.userSignIn);
  const {userInfo} = userSignIn;
 return( 
 <Routes>
  
   
    <Route path="/" element={<Home />} >
    <Route path="product/:id" element={<ProductScreen />} ></Route>
   
   <Route path="cart/:id?" element={<CartScreen />} ></Route>

   <Route path="register" element={<RegisterPage />} ></Route>
   <Route path="signin" element={<SignInPage />} ></Route> 
    </Route>
   
        
    
       
      
    
    {/**Protected Routes**/ }
    <Route path="admin" element={<Dashboard />} >
    <Route path="add-category" element={<AddCategory />} ></Route>
            <Route path="add-product" element={<AddProduct />} ></Route>
            <Route path="all-categories" element={<AllCategories />} ></Route>
           
            <Route path="all-products" element={<AllProducts />} ></Route>
           
             <Route path="users" element={<Users />} ></Route>
            < Route path="orders" element={<Orders />} /> 
            </Route>
 
            
         
        </Routes>
 )
};