import React from "react";
import { Link } from "react-router-dom";
import "../src/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="oo">
        <div className="gh">
          <Link className="jh" to={"/"}>
            Home
          </Link>
          <Link className="jh" to={"/Women"}>
            Women
          </Link>
          <Link className="jh" to={"/Men"}>
            Men
          </Link>
          <Link className="jh" to={"/Contact"}>
            Contact
          </Link>
       

          <div className="cyt">
            <input type="text" placeholder="Search Here" className="ug" />
            <label htmlFor="Search "></label>
            <span className="vgy">
              <i class="fa-solid fa-magnifying-glass fa-lg"></i>
            </span>
          </div>
        </div>
        
      <div className="sdwid">
      <Link className="signup" to={"/Signup"}>
          Sign Up
        </Link>
          <Link className="Login" to={"/Login"}>
          Login
        </Link>
       <p className="Logo">Shopido</p>
        
      </div>
      </div>
    </>
  );
};

export default Navbar;
