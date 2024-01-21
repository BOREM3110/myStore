import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';

export default function AllCategories() {

  
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
   useEffect(()=> {
    axios.get("/api/categories").then((response)=> response.data).then((data)=> setData(data)).catch((error)=> setError(error.message))
    setLoading(false);
  }, []);

  const deleteCategory = (e, id)=> {
    e.preventDefault()
axios.delete(`/api/categories/${id}`).then((response)=> response.data).then((data)=> setData(data.AllCategories)).catch((error)=> console.log(error));

}
  return (
    <section className="h-screen" >
    <Container>
      <Row>
        <Col lg='12'>
          <table className="table" >
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                  <th>Action </th>
              </tr>
            </thead>
            <tbody>
           
                {loading ? <h4 className="py-5 text-xl bold-900" >Loading ....</h4> :  data.map((category, i)=> {
                    return( 
                      <tr key={category.id} >
                   <td  ><img className="w-30 h-9" src={`http://localhost:5000/${category.name}.jpg`||`http://localhost:5000/${category.name}.jpeg` } alt={category.name} /> </td>
                     <td>{category.name} </td>
                     <td>{category.description}</td>
                    
                     <td><button className="btn btn-danger" onClick={(e)=>deleteCategory(e, category.id)} >Delete</button> </td>
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
