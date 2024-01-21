import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from "reactstrap";
import PersonIcon from '@mui/icons-material/Person';
import toast, { Toaster } from "react-hot-toast";

export default function Users() {
  const [loading, setLoading] = useState(false);
  const [usersData, setUsersData] = useState([]); 
  useEffect(()=> {
    const getUsers = async(users)=> {
      setLoading(true)
      const response = await axios.get("/api/users");
      setUsersData(response.data);
      console.log(response);
      setLoading (false);
     
     
    }
    getUsers();
    
  }, []);
  const deleteUser = async(e, id)=> {
    try {
      e.preventDefault();
    const response = await axios.delete(`/api/users/${id}`);
    const { data } = response;
    setUsersData(data.users)
 
      toast.success("Deleted!") 
    
    }catch(error) {
      console.log(error);    }
  }
  
  return (
    <section className="h-screen" >
      <Container>
        <Row>
          <Col lg="12"  >
            <h4 className="bold" >Users</h4>
          </Col>
          <Col lg="12" className="pt-5" >
            <table className="table" >
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>lastName</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {loading ? <h4 className="pt-5 fw-bold-500" >Loading ....</h4>: usersData?.map((user)=> (
                <tr key={user.id} >
                    <td>{user.image ? <img src={user.image} alt={user.name} /> :<PersonIcon /> }</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.isAdmin ? "Admin" : "Client"}</td>
                    <td><button className="btn btn-danger" onClick={(e)=>deleteUser(e, user.id)} >Delete</button> 
                    <Toaster />
                    </td>
                </tr>
              )
              )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
