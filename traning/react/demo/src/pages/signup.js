import React, { useState } from "react";
import "./signup.css"
import axios from "axios";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRpassword] = useState("");

  function handleclick() {
    let url = "http://localhost:8000/signup";
    let request = {
      ufirstname: firstname,
      ulastname: lastname,
      uemail: email,
      upassword: password,
      rpassword: repassword
    };
    let header = {};

    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data[0]);
      })
      .catch();
  }

  return (
    <>
      <div className="container">
        <form className="max">
        <h1 className="heading">Signup</h1>
        <label>First name</label>
        <input
          type="text"
          placeholder="First name"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        required/>
        <label>Last name</label>
        <input
          type="text"
          placeholder="Last name"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          required/>
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required/>
        <label>password</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required/>
        <label>re enter password</label>
        <input
          type="password"
          placeholder="re enter password"
          onChange={(e) => {
            setRpassword(e.target.value);
          }}
          required/>
        <button onClick={handleclick}>Signup</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
