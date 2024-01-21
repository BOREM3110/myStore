import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { getProductById } from '../slices/productReducer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function ProductScreen() {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [src, setSrc] = ""
  const product = useSelector((state)=> state.productDetails).product;
  const [quantity, setQuantity] = useState(1);
  const productId = useParams().id;
 const onClickHandler = (e)=> {
  e.preventDefault()
 navigate(`/cart/${productId}?quantity=${quantity}`);
 };
useEffect(()=> {
dispatch(getProductById(productId));
}, [dispatch]) 

  return (
    <div>
     
      <Link to="/" ><p className="text-black hover:text-orange-600 ml-2 font-bold" >Back to home</p></Link>
    <div className="flex flex-wrap justify-between items-start  h-screen gap-2 w-full" >
      
      <div className="border-black bg-grey-200 rounded-md m-6 p-4 h-[80%]">
      
      </div>
      <div key={product.id} className='flex-1 border-solid-black border-lg margin-4 p-4' >
        <ul className='m-0 p-0 list-none' >
          <li className="mt-4" >
          {product.image && <img className="object-contain h-full w-96 hover:scale-110 hover:duration-300" src={`http://localhost:5000/${product.image}`} alt={product.name} />}
          <div className="flex flex-col w-80 text-center" >
            <h1 className="text-xl mr-2 mt-2" >
               {product.name}
            </h1>
            <p className="text-xl mt-2 ml-2" >Price: ${product.price}</p>
            </div>
          </li>
          <li className="mt-4" >
            Description: <p>{product.description}</p>
          </li>
          
        </ul>
      </div>
      <div className="flex-1" >
        <div className="border-black bg-grey-200 rounded-md m-4 p-4" >
          <ul className='m-0 p-0 list-none' >
            <li className="mt-4" >
              <div className="flex flex-wrap space-between items-center" >
                <div className="text-4xl" >Price:</div>
                <div className="text-4xl" >${product.price}</div>
              </div>
            </li>
            <li className="mt-4" >
            <div  className='flex-auto'>
                <div>Status</div>
                <div>{product.countInStock > 0 ?(<span className="text-green-500" >In stock</span>):( <span className="text-red-500" >Unavailable</span>)}</div>
              </div>
            </li>
            {product.countInStock > 0 && (
              <>
              <li>
                <div className="flex flex-wrap justify-between align-center" >
                  <div>
                    Quantity
                  </div>
                  <div className="w-8" >
                    <select onChange={(e)=> setQuantity(e.target.value)} value={quantity} >
                   { [...Array(product.countInStock).keys()].map(x=> (<option  value={x+1} >{x+1}</option>))
                      }
                    </select>
                  </div>
                </div>
              </li>
              <Link to="/cart" >
              <li>
                <button onClick={(e)=> onClickHandler(e)} className="p-2 text-2xl font-semiBold m-2 w-full bg-slate-500 rounded-lg text-white hover:border-black" >
                    Add to cart
                </button>
              </li>
              </Link> 
              </>
              
            )}
            
          </ul>
        </div>
      </div>
    </div>
   
    </div>
  )
};
