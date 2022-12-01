import "./Style.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    //console.log(firstName,lastName,email,password,confirmPassword);
    // const data=localStorage.getItem("user", JSON.stringify(user));
    //console.log(data)

    if (localStorage.getItem("user")) {
      alert("sucessfully Login");
      navigate("/home");
    }
  };

  return (
    <div className="form">
      
      <div className="form-body">
      <h2>Login</h2>
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
      </div>
      <div class="footer">
        <button
          style={{
            color: "white",
            backgroundColor: "#4267B2",
            padding: "5px",
            borderRadius: "10px",
            width: "90px",
            cursor: "pointer",
          }}
          onClick={handleLogin}
          type="submit"
          class="btn"
        >
          Login
        </button>
        <div >
            <a href="/signup">Don't have Acount ? Signup</a>
        </div>
    
        
      </div>
    </div>
  );
}

export default Login;
