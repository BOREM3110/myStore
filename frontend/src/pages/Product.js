import React from 'react'
import StarIcon from '@mui/icons-material/Star';
 import { Link, useNavigate } from 'react-router-dom';


export default function Product({item, onClick}) {
  const navigate = useNavigate();  
  return (
    <div>
  
    <div key={item.id} className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 flex flex-col gap-4 relative" >
      
      <Link to={`/product/${item.id}`} >
        <div className="w-full h-[280px] flex  justify-center  flex-grow">
        <img className="w-[250px] h-auto object-cover" src={`http://localhost:5000/${item.image}`} alt={item.name} />
          </div>
          <div className="px-4" >
          <div className="flex items-center justify-between" >
            <Link to={`/product/${item.id}`} >
            <h2 className="font-titleFont tracking-wide text-lg font-medium text-slate-600" >{item.name.substring(0, 20)}</h2>
            </Link>
            <p className="text-sm text-gray-600 font-semibold" >${item.price}</p>
          </div>
          <div className="" >
            <p className="text-sm mb-1" >{item.description.substring(0, 100)}...</p>
            <div className="text-yellow-300" >
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <button className="w-[75%] font-titleFont ml-10 mr-40 justify-center font-medium text-base bg-gradient-to-tr from-slate-400 to-slate-200 border hover:from-slate-300 hover:to-slate-border-500 hover:slate-border-700 active:bg-gradient-to-b1 active:from-slate-400 active:to-slate-400 duration-200 py-1.5 rounded-md mt-3 " onClick={(e)=> navigate(`/products/${item.id}`)} >Add to cart</button>
          </div>
           
          </Link>
          
       </div>
   
       </div>
  )
}
