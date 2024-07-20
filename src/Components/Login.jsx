import React, { useState } from "react";

import { Button, Input } from "@chakra-ui/react";
import "./Login.css";
function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // alert("");
    e.preventDefault();

    if (data.email.trim() === "" || data.password.trim() === "") {
      alert("plzz fill the all inputs");
    }

    console.log(data);
  };

//   console.log("login");

  return (
    <div className="top">
      <div className="top2">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="ib">
            <label>Email:</label>
            <Input
              type="email"
              value={data.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="ib">
            <label>Password:</label>
            <br />
            <Input
              type="password"
              value={data.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <br />
          <Button type="submit">login</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
