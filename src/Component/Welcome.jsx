import React from "react";
import './Style.css'
const Welcome = () => {
  return (
    <div className="welcomeHeader">
      <ul style={{listStyle:'none' ,fontSize:'bigger',color:'blue'}}>
      
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Signup</a>
        </li>
      </ul>
    </div>
  );
};

export default Welcome;

