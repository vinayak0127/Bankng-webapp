import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./adduser.css"

function View() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    amount: "",
  });
  const { id } = useParams();
  useEffect(()=>{
      loadUser();
  },[])
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users//${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      
      <h1 className="display-4" >User ID {id}</h1>
      <hr/>
      <ul className="list-group w-100">
          <li className="list-group w-50" >Name : {user.name}</li>
          <li className="list-group w-50" >Email : {user.email}</li>
          <li className="list-group w-50"  >Amount : ${user.amount}</li>
      </ul>
      <Link className="btn btn-primary" to="/" >Back to home</Link>
    </div>
  );
}

export default View;
