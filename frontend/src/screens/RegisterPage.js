import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerClient } from '../slices/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export default function RegisterPage() {
 let [user, setUser] = useState({firstName:"", lastName: "", email: "", password: "", password2: ""});
  const dispatch = useDispatch();
  const userSignIn = useSelector(state=> state.userSignIn);
  const navigate = useNavigate();
const {isLoading, userInfo} = userSignIn;
    const onChange = (e)=> {
      const name = e.target.name;
      setUser((v)=> ({...v, [name]: e.target.value}))
    };
   
    useEffect(()=> {
        if(isLoading === false) {
          navigate("/login");
        }
    }, []);
    
    const onSubmitHandler = async(e)=> {
      e.preventDefault();
     
      const {firstName, lastName, email, password, password2} = user;
     
      dispatch(registerClient({firstName, lastName, email, password, password2}))
     
    }
  return (
    <div className="w-full flex flex-col items-center justify-center text-center h-[620px]  bg-white mt-[5px] border-r-2 signup-box" >
    
      
      <div className="outline-3" >

      <h1 className="text-xl text-center font-bold mt-[8px] mb-4" >Create account</h1>
     
      <form className="text-center w-[360px] ml-[20px]" >
        <div className="mt-2" >
        <label id="firstName" className="firstName" >
             Name
          </label>
          <input placeholder="Enter your name please" onChange={(e)=> onChange(e)}  className="w-full p-[8px] border-2 border-gray-600 border-r-4 outline-none"  type="text" name="firstName" />
          {/*userSignIn.error ? <span className='text-red-500' >{userSignIn.error.firstName}</span> : null*/}
        </div>
          
        <div className="mt-2" >
        <label id="lastName" className="lastName" >
            Family Name
          </label>
          <input placeholder="Enter your family name please" onChange={(e)=> onChange(e)}  className="w-full p-[8px] border-2 border-gray-600 border-r-4 outline-none"  type="text" name="lastName" />
          {/*Object.keys(userInfo.errors).length > 0 ? <span className='text-red-500' >{userInfo.errors.lastName}</span> : null*/}
        </div>
          
          <div className="mt-2 text-center" >
          <label id="email" className="email" >
              Email
          </label>
          <input placeholder="Enter your email please" onChange={(e)=> onChange(e)} className="w-full p-[8px] border-2 border-gray-600 border-r-4 outline-none" type="email" name="email" />
          {/*Object.keys(userInfo.errors).length > 0 ? <span className='text-red-500' >{userInfo.errors.email}</span> : null*/}
          </div>
          
          <div className="mt-2" >
          <label type="password" className="password" >
              Password
          </label>
          <input placeholder="Enter your password please" onChange={(e)=> onChange(e)}  className="w-full p-[8px] border-2 border-gray-600 border-r-4 outline-none" type="password" name="password" />
          {/*Object.keys(userInfo.errors).length > 0 ? <span className='text-red-500' >{userInfo.errors.password}</span> : null*/}
          </div>
          <div className="mt-2" >
          <label id="password2" className="password" > Confirm password
          </label>
          <input placeholder="Confirm your password please" onChange={(e)=> onChange(e)}  className="w-full p-[8px] border-2 border-gray-600 border-r-4 outline-none" type="password" name="password2" />
          {/*Object.keys(userInfo.errors).length > 0 ? <span className='text-red-500' >{userInfo.errors.password2}</span> : null*/}
          </div>
          
          <input onClick={(e)=>onSubmitHandler(e)}  className="w-[320px] h-[35px] mt-[20px] bg-[#49c1a2] rounded-lg text-white text-xl" type="button" value="submit" />
      </form>
      </div>
      
    <p className="text-center pt-[20px] -mt-[10px]" >Already have an account? <Link className="text-blue-400 text-xl" to="/login" >login here</Link> </p>
   </div>
  )
  }
