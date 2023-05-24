import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);
  

  function handleclick() {
    let url = "http://localhost:8000/login";
    let request = { uemail: name, upassword: password };
    let header = {};

    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data[0]);
        setList(res.data[0]);
      })
      .catch();
  }
  return (
    <>
      <div className="container">
        <label>username</label>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>password</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleclick} >login</button>
        <a href="./about">about page</a>
      </div>
      <div>
            {list.map((val,indx)=>{
                return<>
                {val.id}
                {val.email}
                {val.password}
                <br/>
                </>
            })}
        </div>
    </>
  );
}
