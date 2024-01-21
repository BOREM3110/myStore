import React, { useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './components/Sidebar.js';
import './tailwind.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Products from './pages/Products';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  Router,
  Routes,
  useLocation,
  RouterProvider,

  useNavigate
 
} from "react-router-dom";
import Footer from './components/Footer.js';
import ProductScreen from './pages/ProductScreen.js';
import CartScreen from './pages/CartScreen.js';
import CheckoutScreen from './screens/CheckoutScreen.js';
import RegisterPage from './screens/RegisterPage.js';
import SignInPage from './pages/SignInPage.js';
import AllProducts from './admin/AllProducts.js';
import AddProduct from './admin/AddProduct.js';
import AllCategories from './admin/AllCategories.js';
import AddCategory from './admin/AddCategory.js';

import Dashboard from './admin/dashboard/Dashboard.js';
import AdminNav from './admin/AdminNav.js';
import {useDispatch, useSelector} from "react-redux";
import Users from './admin/Users.js';
import Orders from './admin/Orders.js';
import OrderScreen from './screens/OrderScreen.js';
import { Routers } from './routers/Routers.js';
import NoMatchPage from './pages/NoMatchPage.js';
import PaymentScreen from './screens/PaymentScreen.js';
import OrderDetailScreen from './screens/OrderDetailScreen.js';
import { Carousel } from 'reactstrap';
import Carrousel from './components/Carrousel.js';
import { getAllCategories, getCategories } from './slices/categoriesReducer.js';
import ReactPaginate from "react-paginate";
import { getProducts } from './slices/productsReducer.js';








const Layout = () => {
 
  return (
    <div>
     
     <div>
    <Routers />
     </div>
     
     <Footer /> 
      
      
    </div>
    
  )
}




export default function App() {
  
  const userSignIn = useSelector((state)=> state.userSignIn);
  const dispatch = useDispatch();
  const { userInfo } = userSignIn;
  const location = useLocation();
  
  useEffect(()=> {
    if(userInfo.isAdmin) {
      navigate('/admin')
    }
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);
   const navigate = useNavigate();

 return (
  <div>
{location.pathname.startsWith('/admin')? <AdminNav /> : <Navbar />}
{!location.pathname.startsWith("/admin") && !location.pathname.startsWith("/login") && !location.pathname.startsWith("/register") && <Carrousel />}

  <Routes>
  
   
  <Route path="/" element={<Home />} />
  <Route path="product/:id" element={<ProductScreen/>} />
  <Route path="register" element={<RegisterPage />} ></Route>

 

   <Route path="cart/:id?" element={<CartScreen />} />
   <Route path="login" element={<SignInPage />} />
   <Route path="order" element={<OrderScreen />} />
   <Route path="payment" element={<PaymentScreen />} />
   <Route path="orders-details" element={<OrderDetailScreen />} />
  <Route path="admin" element={<Dashboard />} />
    <Route path="admin/all-products" element={<AllProducts />}  />
    <Route path="admin/all-categories" element={<AllCategories/>}  />
    <Route path="admin/add-category" element={<AddCategory/>}  />
    <Route path="admin/add-product" element={<AddProduct  />}  />
    <Route path="admin/orders" element={<Orders  />}  />
    <Route path="admin/users" element={<Users />}  />
    

       <Route path="*" element={<NoMatchPage />} /> 
       
      </Routes>
    
      <Footer />
      </div>
     )
};
