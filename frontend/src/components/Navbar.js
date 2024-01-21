import React, {useState, useEffect} from 'react';
import Axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import AssistantIcon from '@mui/icons-material/Assistant';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Link, useLoaderData } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCart, getCartItems } from '../slices/cartReducer';
import { logoutClient } from '../slices/userReducer';
import DropDownFile from './DropDownFile';

 function Navbar() {
  const [cart, setCart] = useState([])
  const dispatch = useDispatch();
  const {cartItems} = useSelector((state)=> state.cart);
  const [open, setOpen] = useState(false);
  const userSignIn = useSelector((state)=> state.userSignIn);
  const {userInfo} = userSignIn;
  const signOutHandler = ()=> {
    dispatch(logoutClient());
    localStorage.removeItem("cart");
  };
  
 
  return (
    <div className="w-full" >
    <div className="max-w-full mx-auto bg-slate-400 text-white px-4 py-3 flex items-center gap-4" >
      <div className="headerHover" >
        <Link to="/" > Myshop.com</Link>
      </div>
      <div className="headerHover" >
        <p className="text-sm text-lightText font-light" >Welcome to <span className="text-sm font-semibold -mt-1 text-white" >the best e-commerce website</span></p>
      </div>
      <div className="h-10 hidden top-2 lgl:flex rounded-md  flex-grow relative " >
          <input className="h-full  text-base text-black flex-grow outline-none border-none px-2" type="text" />
          <span className="w-12 h-full flex items-center justify-center bg-slate-600 hover:bg-[#f4a996]duration-300 text-white cursor-pointer rounded-tr-md rounded-br-md" > <SearchIcon /> </span>
      </div>
      <div className='flex items-start justify-center headerHover' >
      {
       Object.keys(userInfo).length > 0 ? (
          <div className="drop-down flex relative" >
            <Link to="#" onClick={()=> setOpen(!open)} >{ userInfo.name}<ArrowDropDownIcon ></ArrowDropDownIcon>{' '}
            </Link>
           <div className="" >
             {open && <DropDownFile signOutHandler= {signOutHandler} /> }
            </div>
          </div>
        ) :
        (
          <Link to="/login"  className="text-xl" >Sign In</Link>
        )
      }
        
      </div>
      <Link to="/cart" >
      <div className="cursor-pointer " >
        <ShoppingCartIcon />
        <span className='mr-2.5 px-2 py-1 bg-red-900 text-white text-lg font-bold rounded-full relative -top-5 -left-5 w-6 justify-center items-center' >{cartItems.length}</span>
      </div>
      </Link>
     
      </div>
      <div className="w-full px-4 h-[36px] bg-slate-700 text-white flex items-center" >
        <div className="flex text-base font-bold items-center space-around gap-2  tracking-wide" >
          <div className='ml-4 hidden md:inline-flex cursor-pointer' > <SentimentSatisfiedAltIcon /> your idea</div>
          <div className='ml-4 hidden md:inline-flex cursor-pointer' > <AssistantIcon /> Suggestions</div>
          <div className='ml-4 hidden md:inline-flex cursor-pointer' > <EmailIcon /> Contact us</div>
          </div>
      </div>
    </div>
    
  
  )
};

export default Navbar;
