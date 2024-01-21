import React from 'react';
import {BiCaretRight} from "react-icons/bi";
//import TreeView from '@mui/lab/TreeView';
import {BiCaretDown} from "react-icons/bi";

import {useState, useEffect} from "react";
import axios from "axios";
import SidebarItem from './SidebarItem';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../slices/categoriesReducer';
import { Link } from 'react-router-dom';



function Sidebar({handleCategoryId, category, catId}) {
  const [open, setOpen] = useState(false);


const categories = useSelector((state)=> state.categories);
 
  
  const {isLoading, error, allCategories} = categories;
  let [categoryName, setCategoryName] = useState("");

  
          
    return ( 
     
      <div className="sidebar w-[300px] shrink-0 bg-slate-200 -ml-2  mr-8 height-full overflow-auto" >
      <div className="g-title items-center bg-slate-900 text-white w-full mt-2 mb-2 text-2xl p-[1.5rem]" >
      <button className="text-center"  onClick={()=> handleCategoryId(undefined)} > All Categories </button>
    </div>
       {allCategories.length > 0 && allCategories.map((category, index)=> (
        <SidebarItem key={index} handleCategoryId={handleCategoryId} category={category} />))}
        
       
      </div> 
       
      )     
       };  
        
export default Sidebar;
