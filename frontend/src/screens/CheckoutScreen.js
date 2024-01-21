import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CheckoutScreen(props) {
  return (
  <div className="bg-slate-300 font-semibold rounded-md flex p-4 h-10 content-center flex-row m-6 justify-between  w-full" >
    <div className={`${props.step1} ? transform bg-white flex flex-row w-[20%] items-center gap-2 px-1  : flex w-[20%]  px-2 gap-4 items-center` } >
      <h3 className="ml-2  text-xl">SignIn</h3>
    <span>
      {props.step1 ? <input className="w-10 h-6 p-2" type="checkbox" name="signIn" checked />: <input  type="checkbox" name="signIn" />}
    </span>
    </div>
    <div className={`${props.step2} ? bg-white flex w-[20%] gap-4 flex-row items-center px-2  : flex w-[20%] items-center gap-4 px-2 ` }>
      <h3 className="ml-2 text-xl" >Shipping</h3>
    <span>
      {props.step2 ? <input type="checkbox" className="w-10 h-6 p-2"name="shipping" checked />: <input type="checkbox" name="shipping" />}
    </span></div>
    <div className={`${props.step3} ? bg-white flex w-[20%] items-center gap-4 flex-row px-2  : flex w-[20%] items-center gap-4  px-2 ` }>
      <h3 className="ml-2 text-xl">Payment</h3>
    <span>
      {props.step3 ? <input className="w-10 h-6 " type="checkbox" name="payment" checked />: <input  type="checkbox" name="payment" />}
    </span>
    </div>
    <div className={`${props.step4} ? bg-white flex w-[20%] items-center px-2 gap-4 flex-row  : flex w-[20%] items-center gap-4 px-2 ` } >
      <h3 className="ml-2 text-xl" >Order</h3>
    <span>
      {props.step4 ? <input className="w-10 h-6" type="checkbox" name="order" checked />: <input  type="checkbox" name="order" />}
    </span>
    </div>
    
   </div>
  
  )
}
