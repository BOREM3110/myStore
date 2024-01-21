import React, {useState} from 'react'
import {BiCaretDown} from "react-icons/bi";
import { useSelector } from 'react-redux';




export default function SidebarItem({handleCategoryId, category}) {
  let [open, setOpen] = useState(false);
  let [categoryName, setCategoryName] = useState("");
return (
  <div className="" >
   
   {category.children.length > 0 ? (<div className="sidebar-item p-[1em] block text-xl hover:bg-white" >
      <div className="sidebar-title flex justify-between" >

        <button onClick={()=>handleCategoryId(category.id)} >{category.name}</button>
         <BiCaretDown onClick={()=> setOpen(!open)} className={open ?"rotate-180 duration-300 cursor-pointer" : "cursor-pointer"} />
  

      </div>
      <hr/>
     {open && category.children.map((child, i)=> (
      <div key={i} className="bg-slate-200" >
        <p onClick={()=> handleCategoryId(child.id)} className="m-2 h-1/2 w-full p-2" >{child.name}</p>
      </div> 
     ))  }

   </div>): (<div className="sidebar-item p-[1em] block text-xl hover:bg-white" >
      <div className="sidebar-title flex justify-between" >
        <span>{category.name}</span>
       
   </div>
   </div>) }
   

  </div>
)

};

 
   