import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to = "/"><h1 style={{padding:0,margin :0}}>Home</h1></Link>
    </div>
  )
}

export default Navbar