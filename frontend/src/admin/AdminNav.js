import React, { useState } from 'react';
import {Container, Row, Col} from "reactstrap";
import SearchIcon from '@mui/icons-material/Search';
import { IoSearchSharp } from "react-icons/io5";
import  {IoSettings}  from "react-icons/io5";
import {IoNotifications} from "react-icons/io5";
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {logoutClient} from "../slices/userReducer";
import DropDownFile from '../components/DropDownFile';

const adminNav = [
  {
    display: "Dashboard", 
    path: "admin"
  },
  {
    display: "All-Products", 
    path: "admin/all-products"
  },
  {
    display: "All-Categories", 
    path: "admin/all-categories"
  },
  {
    display: "Add-Product", 
    path: "admin/add-product"
  },
  {
    display: "Add-Category", 
    path: "admin/add-category"
  },
  {
    display: "Orders", 
    path: "admin/orders"
  },
  {
    display: "Users", 
    path: "admin/users"
  }
];

export default function AdminNav() {
  
const userSignIn = useSelector((state)=> state.userSignIn);
const [open, setOpen] = useState(false);
const dispatch = useDispatch();
const navigate = useNavigate();
const signOutHandler = ()=> {
  dispatch(logoutClient())
  return navigate("/login")
}
const { userInfo } = userSignIn; 
  return (
    <>
      <header className="admin_header w-full h-20 bg-slate-700" >
        <div className="admin-nav-top  w-full  " >
          <Container>
            <div className="admin_nav_wrapper_top flex items-center justify-between gap-[4rem] " >
              <div className="logo" >
                <h2 className="text-lg text-white" >MyStore</h2>
              </div>
              <div className="search-box flex items-center justify-between" >
                  <input className="w-[550px] h-6 " type="text" placeholder="Search..." />
                  <span className="bg-red-400 p-1 " > <IoSearchSharp className="text-white" ></IoSearchSharp>  </span>
              </div>
              <div className="admin_nav_top_right flex items-center gap-[2rem] px-[20px] py-0 " >
                <span className="text-white " ><IoNotifications className="text-white" ></IoNotifications></span>
                <span className="text-white " ><IoSettings /> </span>
               
                <PersonIcon className="text-white" ></PersonIcon>
                <div className='flex items-start justify-center text-white headerHover' >
      {
        Object.keys(userInfo).length > 0 ? (
          <div className="drop-down inline-block relative" >
            <Link to="#" >{userInfo && userInfo.name}<ArrowDropDownIcon onClick={()=>setOpen(!open)}></ArrowDropDownIcon>{' '}
            </Link>
         {open && <DropDownFile signOutHandler={signOutHandler} />}
          </div>
        ) :
        (
          <Link to="/login" >Sign In</Link>
        )
      }
        
      </div>
             
               
                  
              
              </div>
            </div>
          </Container>
        </div>
      </header>
      <section className="admin_menu p-0 w-full h-[70px] leading-[18px] content-center bg-white" >
        <Container>
          <Row>
            <div className="admin_navigation text-center" >
                <ul className="admin_menu_list flex  gap-[2rem] justify-center content-center" >
                  {adminNav.map((item, index)=> (
                    <li key={index} className="admin_menu-item ml-10 content-center mt-3 pl-4 w-80"  >
                      <NavLink className={isActive =>
    "nav-link w-full underline-offset-8" + (!isActive ? "unselected" : "bg-white underline-offset-8 w-full")
  } to={item.path} >{item.display} </NavLink>
                    </li>
                  

                  ))}
                </ul>
            </div>
          </Row>
        </Container>

      </section>
      <Outlet />
    </>
     
  )
}
