import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setusers(result.data);
  };

  const deleteUser= async id =>{
    await axios.delete(`http://localhost:3003/users//${id}`);
    loadUsers();
  }

  return (
    <div className="container">
      <div className="head">
        <h1>Active Users 👨‍💼 </h1>
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name 📛 </th>
              <th scope="col">Email 📧 </th>
              <th scope="col">Amount 💰 </th>
              <th>Action 🧢 </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.amount}</td>
                <td>
                    <Link className="btn btn-info m-2"to={`/users/view/${user.id}`} >View</Link>
                    <Link className="btn btn-outline-success m-2" to={`/users/transfer/${user.id}`} >Transfer</Link>
                    <Link className="btn btn-danger m-2" onClick={()=> deleteUser(user.id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
