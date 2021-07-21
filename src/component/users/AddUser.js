import axios from "axios";
import React, { useState } from "react";
import "./adduser.css";
import { useHistory } from "react-router";

const AddUser = () => {
    let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    amount: "",
  });
  const {name,email,amount} = user;
  const onInputChange=e=>{
      setUser({...user,[e.target.name]: e.target.value})
  }

  const onSubmit = async e =>{
      e.preventDefault();
      await axios.post("http://localhost:3003/users",user);
        history.push("/")
  }

  return (
    <form onSubmit={e => onSubmit(e)} className=" container border shadow py-4">
      <h1>Add User</h1>
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
        Add ➕
      </button>
    </form>
  );
};

export default AddUser;
