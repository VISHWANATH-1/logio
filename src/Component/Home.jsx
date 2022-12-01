import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate()
    const handleLogout = () => {
        if(localStorage.getItem("user")){
            localStorage.removeItem("user");
            alert("Logout Sucessfully");
            navigate("/signup")
        }
        
    }

  return (
    <div style={{display:'flex',flexDirection:'column',padding:'20px'}}>
      <h2
        style={{
          textAlign: "center",
          color: "Green",
         
        }}
      >
        Welcome{" "}
      </h2>
      <div
        style={{
          color: "green",
          display: "flex",
          flexDirection: "column",
          border: "1px solid grey",
          marginLeft: "50px",
          width: "60%",
          margin: "auto",
          padding:'20px'
          
        }}
      >
        user: {localStorage.getItem("user")}
      </div>
      <button style={{marginTop:'40px',color:'white',backgrounColor:"blue" ,width:'80px',marginLeft:'400px',height:'30px',borderRadius:'10px'}}
      onClick={handleLogout}
      
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
