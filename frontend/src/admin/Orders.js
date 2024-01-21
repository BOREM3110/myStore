import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders, removeOrderById } from '../slices/orderReducer';

export default function Orders() {
const dispatch = useDispatch();
const orders = useSelector((state)=> state.order.orders); console.log(orders)
  useEffect(()=> {
      dispatch(getAllOrders());  
  }, [dispatch]);

 const onRemoveOrder = (e, orderId)=> {
    e.preventDefault();
    dispatch(removeOrderById(orderId))
  }
  return (
    <div className="h-max-screen " >
     
   
        <h3 className="text-2xl mt-4 mb-8 text-center" >Order details</h3>
       
          
            <table  className="w-full h-[500px] table-auto text-left" >
              <thead>
                <tr className="justify-between" >
                  <th className="border-blue-gray-100 bg-blue-gray-50 p-4">orderId </th>
                  <th className="border-blue-gray-100 bg-blue-gray-50 p-4" >userId</th>
                  <th className=" border-blue-gray-100 bg-blue-gray-50 p-4" >Address</th>
                  <th className="border-blue-gray-100 bg-blue-gray-50 p-4" >Phone number</th>
                  <th className="border-blue-gray-100 bg-blue-gray-50 p-4" >Quantity</th>
                  <th className="border-blue-gray-100 bg-blue-gray-50 p-4 " >Action</th>
                 
                </tr>
              </thead>
              <tbody>
                {orders !== undefined && orders.map((order)=> (
                     <tr key={order.id} className="bg-blue-gray-50/50" >
                     <td className="p-4 text-2xl text-black fw-semibold" >{order.id}</td>
                     <td className="p-4 text-2xl text-black fw-semibold" >{order.userId}</td>
                      <td className="p-4 text-2xl text-black fw-semibold" >{order.address}</td>
                     <td className="p-4 text-black text-2xl fw-semibold" >{order.phone}</td>
                     <td className="p-4 text-2xl text-black fw-semibold" >{order.city}</td>
                     <td className="p-4 text-xs text-white" onClick={(e)=> console.log('mmm')}
                    ><button className="btn btn-danger" onClick={(e)=> onRemoveOrder(e,order.id)} >Delete</button></td>
   
   
                   </tr>
                ) )}
               
              </tbody>
            </table>
           
    </div>
  
 
  )
}
