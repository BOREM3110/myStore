import React, {useState, useReducer, useEffect} from 'react';
import { useParams, Link, useNavigate, useSearchParams} from 'react-router-dom';
import { addCartQuantity, addToCart, addToCartItem, getCartItems, minimizeQuantityItem, removeCartItem } from '../slices/cartReducer';
import { useDispatch, useSelector} from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import  Axios  from 'axios';
import { store } from '../store';

 function CartScreen(props, getState) {

  const navigate = useNavigate();
 const cartItems = useSelector((state)=> state.cart.cartItems);


    const [searchParams] = useSearchParams();
  const productId = useParams().id;
  const newQuantity = Number(searchParams.get("quantity"));
  const {product} = useSelector((state)=> state.productDetails);
 
  const minimizeCartHandler= (productId) => {
   
     dispatch(minimizeQuantityItem(productId))
  
 
  };
  const removeCartHandler= (productId) => {
  
    dispatch(removeCartItem(productId))
 };



  const dispatch = useDispatch();
  const newProduct = {...product};  
  newProduct.quantity = newQuantity;
const newCartItems = cartItems.map((item, i)=>{ const indexD = item.price.indexOf("d");
const price =  item.price.split(" ")[0];
 return { name: item.name, description: item.description, price: price, productId: item.productId, quantity: item.quantity}

 });

const totalPrice = newCartItems.reduce((accumulator, currentValue)=> accumulator + currentValue.quantity * Number(currentValue.price), 0);

  useEffect(()=> {
   
  dispatch(addToCartItem(newProduct));
  }, [dispatch, newProduct])

const onSubmitHandler = (e)=> {
 e.preventDefault();
 return navigate("/login")
};
  return (
    <div className="flex-col h-screen">
      
      <Link to="/" ><p className="text-black hover:text-orange-600 ml-4 font-bold m-4" >Back to home</p></Link>
      <div className ={cartItems.length > 0  ? "flex  justify-between h-full mx-[20px] my-auto  border-2 rounded w-[100%] cart-items" :"flex  justify-between h-screen mx-[20px] my-auto  border-2 rounded w-[100%] cart-items" }  >
          <div className= "w-[65%] items-center" >
        <div className="flex-cols m-6  h-[50px] border-b-2 text-2xl" >
          <h2 className="text-xl font-bold" >Cart items</h2>
          </div>
        
        {cartItems.length === 0 && <div className="flex justify-center items-center text-xl font-bold pt-[20px] pb-[20px] " >No items are added to the cart</div> }
        <div>
          {cartItems.map((item)=> {
            return (
           
            <div key={item.productId} className="flex items-center w-full pt-[20px] pb-[20px] pl-[20px] text-xl font-bold ml-[5%] bg-sky-100 " >
             {item.image && <img className="w-[100px] h-auto  border-2 mr-[10px]" src={`http://localhost:5000/${item.image}` } alt={item.name} />}
              <div className="w-[25%] " >{item.name} </div>
              <div className="w-[25%] ml-4 " >
                <button className="w-[30px] mr-[15px] font-bold rounded text-lg text-white cursor-pointer bg-slate-800 " onClick={(e)=> { e.preventDefault()
                  dispatch(addCartQuantity(item.productId))}} >+</button>
                <button className="w-[30px] mr-[15px] font-bold rounded text-lg text-white cursor-pointer bg-red-800  " onClick={()=> minimizeCartHandler(item.productId)} >-</button>
              </div>
              <button className='w-[90px] m-[20px] rounded text-lg cursor pointer p-[8px] border bg-slate-300' onClick={(e)=>(removeCartHandler(item.productId))} >Delete</button>
                <div className="m-2" >
                  {item.quantity} * ${item.price}
                </div>
            </div>
            
            )
            
          })}
  </div>
<div className="flex pt-[20px] pb-[20px] ml-8 pl-[22%] text-xl bg-sky-100 font-bold border-t-2 " >
              Total price
              <div className="flex pl-[45%] " > ${totalPrice} dt </div>
          </div>
        </div>
        
        <div className="w-[30%] text-2xl float-left h-[60%]" >
          <div className="flex-cols max-w-full  border border-black" >
            <div className="m-10" >
            <p>Your total price to pay is ${totalPrice} </p>
            
            {cartItems.length > 0 ?<button   onClick ={(e)=>onSubmitHandler(e) } className=  "p-2 text-2xl font-semiBold m-2 w-[23rem] bg-green-500 rounded-lg text-white hover:border-black mt-4"   >Proceed to order your products</button> : <button className= "p-2 text-2xl font-semiBold m-2 w-[23rem] bg-green-500 rounded-lg text-white hover:border-black mt-4 cursor-not-allowed opacity-50 disabled" >Proceed to order your products</button> }
            </div>
            </div>
           
        </div>

        
      </div>
       
  
    
 </div>
  )
};


export default CartScreen;
