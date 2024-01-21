import axios, { Axios } from 'axios';
import React, {useState} from 'react';
import  toast  from 'react-hot-toast';
import {Form, Container, Row, Col, FormGroup} from "reactstrap";

export default function AddCategory() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [parent, setParent] = useState('');
  const [data, setData] = useState([]);
const [msg, setMsg] = useState('');

const addCategory= async(e, name, description, parent)=> {
  e.preventDefault();
  const url = "http://localhost:5000/api/categories";
  const params = new URLSearchParams;
  params.append('name', name);
  params.append('description', description);
  params.append('parent', parent); 
  const config = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  } 
 axios.post("/api/categories", {name, description, parent}).then((response)=> response.data).then((data)=>{ setData(data.allCategories)
  setMsg(data.msg)
  toast.success(data.msg);
 }).catch((error)=> console.log(error));

}


  return (
    <section className="m-3 h-screen" >
       
      <Container>
        <Row>
          <Col lg='12' >
           
            <h4 className="mb-4" >Add Category</h4>

            <Form >
              <FormGroup className="form_group w-100 flex flex-col" >
              <span className="text-red-600 text-xl" >Category name</span>
              <input className="p-1 w-1/2 border-black rounded-md border-1" type="text" onChange={(e)=> setName(e.target.value)} placeholder="Enter product name" />
              </FormGroup>
              <FormGroup className="form_group w-100 flex flex-col" >
              <span className="text-red-600 text-xl" >Description</span>
              <input className="p-1 w-1/2 border-black border-1 rounded-lg" type="text" placeholder="Enter description" onChange={(e)=> setDescription(e.target.value)}  />
              </FormGroup>
              <FormGroup className="form_group w-100 flex flex-col" >
              <span className="text-red-600 text-xl" >Parent category</span>
              <select className="w-50 p-2 border border-black rounded-lg"  onChange={(e)=> setParent(e.target.value)} >
              <option className="text-gray-400" value="parent" >Parent</option>
              <option className="text-gray-400" value="Not Have" >Not Have</option>
                  <option value="Wear" >Wear</option>
                  <option value="Sports" >Sports</option>
                  <option value="Computers" >Computers</option>
                  <option value="Electronics" >Electronics</option>
                  <option value="Earpods" >Earpods</option>
              </select>
              </FormGroup>
            
              
              <button className="p-2 w-40 rounded-lg text-white text-xl bg-green-500 cursor-pointer" onClick={(e)=> addCategory(e, name, description, parent )}   type="submit" >Add Category</button >
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
