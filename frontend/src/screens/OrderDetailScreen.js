import React, { useEffect, useState } from 'react'
import CheckoutScreen from './CheckoutScreen'
import { postNewOrder, removeOrderById } from '../slices/orderReducer';
import { useDispatch, useSelector } from 'react-redux';
import {MDBTypography, MDBCardFooter} from "mdb-react-ui-kit";
import toast, { Toaster } from "react-hot-toast";




export default function OrderDetailScreen() {
  
  const [command, setCommand]= useState({})
 const { newOrder } = useSelector((state)=> state.order);
 const dispatch = useDispatch();
 const { order } = newOrder;
const empty = "empty";
 const { userInfo } = useSelector((state)=> state.userSignIn);
const date = new Date();
const currentDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
const removeOrder = (e, id)=> {
  e.preventDefault();
  dispatch(removeOrderById(id));
 
}
  return (
    <div className="h-screen" >
     
      <CheckoutScreen step1 step2 step3 />
      <div className="flex-col" >
        <h3 className="text-2xl text-center" >Order details</h3>
        <div className="flex flex-row text-center justify-center m-4 " >
          <div className="flex flex-col  border w-full mr-2 h-50 justify-around" >
            <table  className="w-full min-w-max table-auto text-left" >
              <thead>
                <tr className="justify-between" >
                  <th className="border-blue-gray-100 bg-blue-gray-50 p-4">orderId </th>
                  <th className="border-blue-gray-100 bg-blue-gray-50 p-4" >Name</th>
                  <th className="border-blue-gray-100 bg-blue-gray-50 p-4" >Address</th>
                  <th className="border-blue-gray-100 bg-blue-gray-50 p-4" >Phone number</th>
                  <th className="border-blue-gray-100 bg-blue-gray-50 p-4" >Quantity</th>
                  <th className="border-blue-gray-100 bg-blue-gray-50 p-4 " >Action</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-gray-50/50" >
                  <td className="p-4 text-2xl text-black fw-semibold" >{order === undefined ? empty : order.id}</td>
                  <td className="p-4 text-2xl text-black fw-semibold" >{order === undefined ? empty : userInfo.name}</td>
                   <td className="p-4 text-2xl text-black fw-semibold" >{order === undefined  ? empty : order.address }</td>
                  <td className="p-4 text-black text-2xl fw-semibold" >{order === undefined  ? empty : order.phone }</td>
                  <td className="p-4 text-2xl text-black fw-semibold" >{order === undefined ? empty : order.carts.length}</td>
                  <td className="p-4 text-xs text-white" onClick={(e)=> {order.id && removeOrder(e,order.id)}
                } ><button className="btn btn-danger" >Delete</button></td>


                </tr>
              </tbody>
            </table>
            <div className="mt-4" >
             
           <MDBCardFooter
                  className="border-0 px-4 py-5"
                  style={{
                    backgroundColor: "#C00012",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <MDBTypography
                    tag="h5"
                    className="d-flex align-items-center justify-between text-white text-uppercase mb-0"
                  >
                    Total paid: <span className="h2 mb-0 ms-2">${ order === undefined ? 0 : order.total} dt</span>
                  </MDBTypography>
                </MDBCardFooter>
           </div>
          

                 {order !== undefined && <div className="d-flex justify-content-between pt-2">
                    <p className="text-muted mb-0">Invoice Number : 788152</p>
                   
                  </div>
                }

                 {order !== undefined && <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0">
                      Invoice Date : {currentDate}
                    </p>
                   
                   
                    
                  </div>
}
                {order !== undefined && <div className="d-flex justify-content-between mb-5">
                  <p className="text-muted mb-0">
                      <span className="fw-bold me-4 ">Delivery Charges</span>{":" +" "}
                      <p className="fw-bold" >Free</p>
                    </p>
                    
                  </div>
}
                  <div>
                  {order !== undefined && <p className="text-muted fw-bold mb-0">
                      Delivery Date : Your delivery will come to you in 48 hours from invoice date.
                    </p>}
                    </div>
           </div>
        </div>
      </div>
     
    
      </div>
  );
}
