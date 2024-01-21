import React, { useEffect, useState } from 'react'
import CheckoutScreen from './CheckoutScreen';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { postNewOrder, postOrder } from '../slices/orderReducer';
import { Link, useNavigate } from 'react-router-dom';

export default function PaymentScreen() {
  const userSignIn = useSelector((state)=> state.userSignIn);
  const navigate = useNavigate();
  const { userInfo } = userSignIn;
const { cartItems } = useSelector((state)=> state.cart);
  const newCartItems = cartItems.map((item, i)=>{ const indexD = item.price.indexOf("d");
  const price =  item.price.split(" ")[0];
   return { name: item.name, description: item.description, price: price, productId: item.productId, quantity: item.quantity}
  
   });
   const total = newCartItems.reduce((accumulator, currentValue)=> accumulator + currentValue.quantity * Number(currentValue.price), 0);

  const dispatch = useDispatch();
  const cart = useSelector((state)=> state.cart);
  const { shippingAddress } = cart;
  const newOrder = {
    userId: userInfo.id,
    total: total,
    city: shippingAddress.city,
    postalCode: shippingAddress.postalCode,
    phone: shippingAddress.phone,
    address: shippingAddress.address,
    carts: cartItems
  };
  const [paymentMethod, setPaymentMethod] = useState('');
  useEffect(()=>{
    dispatch(postNewOrder(newOrder))
 
  }, [dispatch, newOrder]);

  const postOrder = (e)=> {
    dispatch(postNewOrder(newOrder));
    return navigate('/orders-details')
  }

  return (
    <div className="h-screen w-[50%] p-[10px] m-auto " >
      <div className="mb-2" >
      <CheckoutScreen step1 step2 />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-10" >How you want to pay ?</h2>
        <div className="flex" >
          <input  type="radio" id="direct" value="direct" checked onChange={((e)=>setPaymentMethod(e.target.value))} name="payment" className="" />
          <label  className="font-semibold text-xl" >Hand by hand</label>
        </div>
        <div className="flex" >
          <input type="radio" onChange={((e)=>setPaymentMethod(e.target.value))} id="online" value="online" name="payment" />
          <label className="font-semibold text-xl" >Online</label>
        </div>

      </div>
      <div>
        <button className="p-2 text-2xl font-semiBold mt-4 w-full bg-green-500 rounded-lg cursor-pointer text-white hover:border-black"  onClick={(e)=> postOrder(newOrder,e)}>Continue</button>
      </div>
    </div>
  )
}
