import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Form, Container, Row, Col, FormGroup} from "reactstrap";
import formData from "form-data";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import showToastMessage from '../utilities/Toast';
import { ToastContainer } from "react-toastify";


export default function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [loading, setLoading] = useState(false); 
  const [image, setImage] = useState(null);
  const form = new FormData();
  const navigate = useNavigate();

 
 const addProduct = async(e, name, description, price,  countInStock, category, image)=> {
  e.preventDefault();
 const product = {
  name: name,
  description: description,
  price: price,
  countInStock: countInStock,
  category: category,
  image: image
 }
 ;

form.append("name", product.name);
form.append("description", product.description); 
form.append("price", product.price); 
form.append("countInStock", product.countInStock); 
form.append("category", product.category); 
form.append("image", image);  
setLoading(true)
 axios({
  method: "post",
  url: "/api/products",
  data: form,
  headers: {"content-type": "multipart/form-data"}

 }).then((response)=>{ 
 setLoading(!loading);
  return response.data

}).then((data)=>{  
  if(data) {
    setLoading(!loading);
   showToastMessage()
  }
  

 }
 ).catch((error)=> console.log(error.message));;
 }
 useEffect(()=> {
  if(loading) {
    navigate("/admin/all-products");
  }
 }, [loading]);
  return (
    <section className="m-3 h-screen" >
      <ToastContainer />
      <Container>
        <Row>
          <Col lg='12' >
            <h4 className="mb-4" >Add Product</h4>
            <Form >
              <FormGroup className="form_group w-100 flex flex-col" >
                
              <span className="text-red-600 text-xl" >Product name</span>
              <input className="p-1 w-1/2 border-black rounded-md border-1" type="text" onChange={(e)=> setName(e.target.value)} placeholder="Enter product name" />
              </FormGroup>
              <FormGroup className="form_group w-100 flex flex-col" >
              <span className="text-red-600 text-xl" >Description</span>
              <input className="p-1 w-1/2 border-black border-1" type="text" placeholder="Enter description" onChange={(e)=> setDescription(e.target.value)}  />
              </FormGroup>
              
              <div className="flex items-center justify-between gap-5" >
              <FormGroup className="form_group w-100 flex flex-col" >
              <span className="text-red-600 text-xl" >Price</span>
              <input className="p-1 w-1/2 border-black border-1"  onChange={(e)=> setPrice(e.target.value)} type="number" placeholder="Enter price" />
              </FormGroup>
              
              <FormGroup className="form_group w-100 flex flex-col" >
              <span className="text-red-600 text-xl" >Category</span>
              <select name="id" className="w-100 p-2"  onChange={(e)=> setCategory(e.target.value)} >
              <option value="choose" >Choose category</option>
                  <option value="Wear" >Wear</option>
                  <option value="Sports" >Sports</option>
                  <option value="Computers" >Computers</option>
                  <option value="Electronics" >Electronics</option>
                  <option value="Earpods" >Earpods</option>
              </select>
              </FormGroup>
              </div>
              <FormGroup className="form_group w-100 flex flex-col" >
              <span className="text-red-600 text-xl" >count In Stock</span>
              <input className="p-1 w-1/2 border-black border-1" onChange={(e)=> setCountInStock(e.target.value)} type="number" placeholder="Enter count" />
              </FormGroup>
              <div>
                <FormGroup className="form_group flex w-100 flex-col" >
              <span className="text-red-600 text-xl" >Product image</span>
              <input className="p-1 w-1/2 border-black border-1" type="file" placeholder="Enter description" onChange={(e)=> setImage(e.target.files[0])} />
              </FormGroup>
              </div>
              <button className="p-2 w-40 rounded-lg text-white text-xl bg-green-500 cursor-pointer" onClick={(e)=>addProduct(e, name, description, countInStock, price, category, image)}  type="submit" >Add Product</button >
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
