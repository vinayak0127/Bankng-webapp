import axios from "axios";
import React, { useState,useEffect } from "react";
import "./adduser.css";
import { useHistory, useParams } from "react-router";

const Transfer = () => {
    let history = useHistory();
    const {id} = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    amount: "",
  });
  const {name,email,amount} = user;
  const onInputChange=e=>{
      setUser({...user,[e.target.name]: e.target.value})
  }

  useEffect(()=>{
      loadUser();
  },[])

  const onSubmit = async e =>{
      e.preventDefault();
      await axios.put(`http://localhost:3003/users/${id}`,user);
        history.push("/")
  }

  const loadUser = async ()=>{
      const result = await axios.get(`http://localhost:3003/users//${id}`);
        setUser(result.data)
  }

  return (
    <form onSubmit={e => onSubmit(e)} className=" container border shadow py-4">
      <h1>Transfer Amount</h1>
      <div className="form-group ">
        <input
          type="text"
          className="form-control"
          placeholder="Name 👨‍💼"
          name="name"
          value={name}
          onChange={e=> onInputChange(e)}
        />
        <input
          type="email"
          className="form-control py-4"
          placeholder="Email address 📧 "
          name="email"
          value={email}
          onChange={e=> onInputChange(e)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Amount 💰  "
          name="amount"
          value={amount}
          onChange={e=> onInputChange(e)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
};

export default Transfer;
