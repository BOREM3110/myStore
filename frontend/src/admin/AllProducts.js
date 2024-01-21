import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import { getAllProducts, getProducts, resetAllProducts, resetProducts } from '../slices/productsReducer';
import axios from 'axios';
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';
import showToastMessage from '../utilities/Toast';
import { ToastContainer } from "react-toastify";


export default function AllProducts() {
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updated, setUpdated] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription ] = useState("");
  const [cancelToken, setCancelToken] = useState(null);

  const dispatch = useDispatch();
  const {allProducts, reset} = useSelector((state)=> state.allProducts);
  const [productId, setProductId] = useState(-1);
  useEffect(() => {
    if (cancelToken) {
      cancelToken.cancel('Operation canceled by the user.');
    }
    const  newCancelToken = axios.CancelToken.source();
    setCancelToken(newCancelToken);
    axios.get('/api/products', {
      cancelToken: newCancelToken.token
    }).then(response => {
      setData(response.data.products);
      setLoading(false);
      toast.success("Product have been added successfully!");
    });
    
  }, []);
  const deleteProduct = (e,id)=> {
    e.preventDefault();
    axios.delete(`/api/products/${id}`).then((response)=> (response.data.allProducts)).then((data)=>{ 
      setData(data)
      toast.success("item deleted!")
    }).catch((error)=> console.log(`There 's an error in your request which is: ${error}`))
  };
  const handleEditId = (id)=> {
    setProductId(id)
  };
  const handleSubmit  = async(event, id, name, description, price)=> {
    try {
    event.preventDefault();
    const response = await axios.put(`/api/products/${id}`, { name, description, price});
    if(response.status) {
      setUpdated(true);
    }
    const {data} = response;
    setData(data.products);
    }catch(error) {
      console.log(error);
    }
  };

  
  
 
  return (
    <section className="h-max-screen mt-10" >
      <ToastContainer />
      <Container>
        <Row>
          <Col lg='12'>
            <table className="table" >
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
             
                  {loading ? <tr><td className="py-5 text-xl bold-900" >Loading ....</td></tr> :  data.map((product, i)=> {
                      return( 
                        product.id === productId ?
                        <tr key={ product.id} >
                          <td><img src={`http://localhost:5000/${product.image}`} className="w-30 h-9"  /></td>
                          {!updated ?<td> <input type="text" onChange={(e)=>{
                            e.target.value === "" ?
                           setName(product.name) : setName(e.target.value)}} placeholder={product.name} /> </td>: <td> {product.name} </td>}
                          <td>{product.categoryId} </td>
                          {!updated ? <td ><input type="text" onChange={(e)=>{
                            e.target.value === "" ?
                           setPrice(product.price) : setPrice(e.target.value)}}placeholder={product.price}  /> </td> : <td>{product.price}</td>}
                          {!updated ? <td ><input  type="text" value={product.description} onChange={(e)=>{
                            e.target.value === "" ?
                           setDescription(product.description) : setDescription(e.target.value)}} placeholder={product.description} /> </td> : <td>{product.description}</td>}
                          {!updated ?<td><button className="btn btn-primary ml-8" onClick={(event)=>handleSubmit(event, product.id, name, description, price)} >Update</button></td>: <td><button className="btn btn-primary ml-8" onClick={(event)=>handleSubmit(event, product.id, name, description, price)} >Modify</button></td>}
                        </tr> :
                        <tr key={product.id} >
                      <td  ><img className="w-30 h-9" src={`http://localhost:5000/${product.image}`} alt={product.name} /> </td>
                       <td>{product.name}  </td>
                       <td>{product.categoryId}</td>
                       <td>{product.price}</td>
                       <td>{product.description}</td>
                       <td className="w-50"><button className="btn btn-danger w-15" onClick={(e)=>deleteProduct(e, product.id)} >Delete</button> 
                       <button className="btn btn-primary ml-2 w-15" onClick={()=>handleEditId(product.id)} >Modify </button>
                       </td>
                       </tr>
                      )
                  })}
                 
              </tbody>
              
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
