import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css"


const Navbar = () => {
  const navigate = useNavigate();
  

  return (
    <div className="navbar">
        <h3 onClick={()=>navigate("/")}>COINTAB</h3>
    </div>
  );
};

export default Navbar;