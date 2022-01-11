import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-black">
      <Link to="/">
        <h4>Home</h4>
      </Link>
    </nav>
  );
}

export default Navbar;
