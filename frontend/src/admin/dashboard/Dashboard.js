import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Container, Row, Col} from "reactstrap";
import { getAllUsers } from '../../slices/userReducer';
import { getAllOrders } from '../../slices/orderReducer';

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllUsers());
    dispatch(getAllOrders());
  }, [dispatch])
  const allProducts = useSelector((state)=> state.allProducts.products);
const { users } = useSelector((state)=> state.userSignIn);
const { orders } = useSelector((state)=> state.order);

  return (
    
    <section className="justify-around ml-20 content-center mt-28 h-screen" >
      <Row>
        <Col className="lg-6" >
          <div className="p-[20px] rounded-md bg-slate-200" >
            <h5 className="text-lg font-medium mb-[20px]">Total Sales</h5>
            <span className="text-3xl font-semibold" >$7890</span>
          </div>
        </Col>
        <Col className="lg-3" >
        <div className="order_box p-[20px] rounded-md bg-slate-200" >
            <h5 className="text-lg font-medium mb-[20px]" >Orders</h5>
            <span className="text-3xl font-semibold" >{orders.length}</span>
          </div>
        </Col>
        <Col className="lg-3" >
        <div className="products_box p-[20px] rounded-md bg-slate-200" >
            <h5 className="text-lg font-medium mb-[20px]" >Total products</h5>
            <span className="text-3xl font-semibold" >{allProducts.length}</span>
          </div>
        </Col>
        <Col className="lg-3" >
        <div className="users_box p-[20px] rounded-md bg-slate-200" >
            <h5 className="text-lg font-medium mb-[20px]" >Total users</h5>
            <span className="text-3xl font-semibold" >{users.length}</span>
          </div>
        </Col>
        </Row>
    </section>
    
  )
}
