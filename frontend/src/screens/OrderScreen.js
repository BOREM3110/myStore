import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Form, Container, Row, Col, FormGroup} from "reactstrap";
import { saveShipAddress } from '../slices/cartReducer';
import { useNavigate, useNavigation } from 'react-router-dom';
import CheckoutScreen from './CheckoutScreen';

export default function OrderScreen() {
  const userSignIn = useSelector(state=> state.userSignIn );
const userInfo = userSignIn.userInfo;
const navigate = useNavigate();



  const cart = useSelector((state)=> state.cart);
  const newCartItems = cart.cartItems.map((item, i)=>{ const indexD = item.price.indexOf("d");
const price =  item.price.split(" ")[0];
 return { name: item.name, description: item.description, price: price, productId: item.productId, quantity: item.quantity}

 });
const total = newCartItems.reduce((accumulator, currentValue)=> accumulator + currentValue.quantity * Number(currentValue.price), 0);

  const {shippingAddress} = cart;
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e)=> {
    e.preventDefault();
    dispatch(saveShipAddress({name, address, postalCode, city, phone, country, total: total}));
console.log(total)  
    navigate("/payment");
  
  };

  return (
   
    <section className="w-[50%] p-[10px] m-auto h-screen" >
      <div className="mb-4" >
      <CheckoutScreen step1 />
      </div>
       
    <Container>
      <Row>
        <Col lg='12' >
          <h4 className="mb-4 text-2xl" >Enter your details </h4>
          <Form >
            <FormGroup className="form_group w-100 flex flex-col" >
            <span className="text-red-600 text-xl" >Full name</span>
            <input className="p-1 w-1/2 border-black rounded-md border-1" type="text" onChange={(e)=> setName(e.target.value)} placeholder="Enter your full name" />
            </FormGroup>
            <FormGroup className="form_group w-100 flex flex-col" >
            <span className="text-red-600 text-xl" >City</span>
            <input className="p-1 w-1/2 border-black border-1" type="text" placeholder="Enter your city" onChange={(e)=> setCity(e.target.value)}  />
            </FormGroup>
            
            
            <FormGroup className="form_group w-100 flex flex-col" >
            <span className="text-red-600 text-xl" >Address</span>
            <input className="p-1 w-1/2 border-black border-1"  onChange={(e)=> setAddress(e.target.value)} type="text" placeholder="Enter address" />
            </FormGroup>
            
            <FormGroup className="form_group w-100 flex flex-col" >
            <span className="text-red-600 text-xl" >Postal Code</span>
            <input className="p-1 w-1/2 border-black border-1"  onChange={(e)=> setPostalCode(e.target.value)} type="number" placeholder="Enter postal code" />
            </FormGroup>
            <FormGroup className="form_group w-100 flex flex-col" >
            <span className="text-red-600 text-xl" >Phone number</span>
            <input className="p-1 w-1/2 border-black border-1"  onChange={(e)=> setPhone(e.target.value)} type="number" placeholder="Enter your phone number" />
            </FormGroup>
         
            <FormGroup className="form_group w-100 flex flex-col" >
            <span className="text-red-600 text-xl" >country</span>
            <input className="p-1 w-1/2 border-black border-1" onChange={(e)=> setCountry(e.target.value)} type="text" placeholder="Enter your country" />
            </FormGroup>
            <button className="p-2 w-96 rounded-lg text-white text-xl bg-green-500 cursor-pointer" onClick={(e)=> submitHandler(e)}   type="submit" >Continue</button >
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
  )
}
