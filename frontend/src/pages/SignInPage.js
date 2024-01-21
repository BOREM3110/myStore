import React, {useState, useEffect} from 'react'
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import toast from 'react-hot-toast';

import DownLoadIcon from '@mui/icons-material/Download';
import { Link, useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { loginClient } from '../slices/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';

 
export default function SignInPage() {
  const [email, setEmail] = useState("");
  //useSelector((state)=> 
 const userSignIn = useSelector((state)=> state.userSignIn);
 const navigate = useNavigate();
 const {userInfo, isLoading, error} = userSignIn;
const isAdmin = userInfo.isAdmin;
const {cartItems} =useSelector((state)=>state.cart);
 useEffect(()=> {
  if(Object.keys(userInfo).length > 0) {
  if(userInfo.isAdmin === true) {
    navigate("/admin")
  } else {
      navigate("/order")
    
  }
}
}, [isAdmin, navigate]) 
 
const [password, setPassword] = useState("");
 const dispatch = useDispatch();

    const onSubmitHandler = async(e) => {
      e.preventDefault();
        dispatch(loginClient(email, password));
         
       };
      
      

  return (
   <div className=" min-h-full bg-gray-200 flex items-start  w-full" >
      <div className="relative w-1/2 h-full flex flex-row justify-between" >
        <div className="absolute top-[20%] left-[20%] flex flex-col justify-between" >
          <h1 className="text-4xl max-w-[500px] text-white font-extrabold my-4 " >Welcome every bodies to our Shop MyStore</h1>
          <p className="text-base text-white font-normal" >Start new experience in our Shop and get attractive offers from the community</p>
        </div>
        <img src={'http://localhost:5000/cover-image.jpg'} className="w-full h-full object-cover" />
        <div className="flex ml-40 flex-col" >
          <div className="w-full content-center text-center" >
        <Container>
        <Row>
          <Col lg='12' >
            <h4 className="mt-2 mb-4 text-xl semibold" >Enter your credentials please</h4>
            <Form >
              <FormGroup className="form_group w-full items-center flex flex-col" >
              <span className="text-blue-600 text-xl" >Email</span>
              <input className="p-1 w-full border-black items-center rounded-md border-1" type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email" />
              {Object.keys(error).length > 0 ? <span className='text-red-500' >{error.email}</span> : null}
              </FormGroup>
              <FormGroup className="form_group w-100 flex flex-col" >
              <span className="text-blue-600 text-xl" >Password</span>
              <input className="p-1 items-center w-full rounded-md border-black border-1" type="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}  />
              {Object.keys(error).length > 0 ? <span className='text-red-500' >{error.password}</span> : null}
                   </FormGroup>
                 </Form>
                 </Col>
                </Row>
              </Container>  
            </div>   
        <div className="forgot-password pl-[62px] mt-[27px] text-lg " >Lost password? <span className="text-[#2c4498] cursor-pointer" >Click here!</span> 
        <p className="fw-bold text-slate-500" ><Link to="/register" >I'am New here.Create New account</Link></p>
        </div>
       
          <div className="submit-container gap-7 mx-[60px] my-auto " >
          <label />
         
            <button onClick={(e)=> onSubmitHandler(e, email, password)} className="submit flex justify-center items-center m-2 w-[220px] h-14 text-white bg-blue-300 rounded-[50px] text-xl font-bold cursor-pointer " >Sign in</button>
            </div>    
          </div>
          </div>
          
      </div>
  
  )
};
 /*<div className="flex flex-col m-auto mt-[200px] pb-[30px] w-full content-center  bg-white " >
        <div className="header flex flex-col items-center gap-2 w-full mt-[30px]" >
          <div className="text text-[#3c009d] text-5xl font-bold" >Log in</div>
          <div className="underline w-16 h-1.5 bg-[#3c009d] rounded-lg" ></div>
        </div>
        <div className="inputs mt-14 flex flex-col gap-6 " >
          <div className="input flex items-center m-auto w-[800px] h-20 bg-[#eaeaea] rounded-md " >
            <EmailIcon className="mx-0 my-7" />
            <input className="h-12 w-[400px] bg-transparent border-none outline-none text-xl" onChange={(e)=> setEmail(e.target.value)}  type="email" placeholder="Type your email here" />
          </div>
          
          <div className="input" >
            <LockIcon />
            <input onChange={(e)=> setPassword(e.target.value)} className="h-12 w-[400px] bg-transparent border-none outline-none text-xl" type="password" placeholder="Type your password here" />
          </div>
        </div>*/