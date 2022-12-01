import "./Style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const UserData = {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  const Redirect = () => {
    if (localStorage.getItem("user")) {
      navigate("/home");
    }
  };

  const handleSubmit = () => {
    //console.log(firstName,lastName,email,password,confirmPassword);
    localStorage.setItem("user", JSON.stringify(UserData));
    alert("Sucessfully Registered");
    Redirect();
  };

  return (
    <div className="form">
      
      <div className="form-body">
      <h2 style={{alignItem:'center'}}>Registration</h2>
        <div className="username">
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
        </div>

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
          onClick={() => handleSubmit()}
          type="submit"
          class="btn"
        >
          Register
        </button>
        <div style={{margin:'2rem'}} >
            <a href="/login">Already Registered ! Login</a>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
