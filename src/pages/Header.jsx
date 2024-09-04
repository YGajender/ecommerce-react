import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ecomcontext } from "../App";
import { IoHome } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import logo from "../assets/logo.png";
import { GrContactInfo } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

function Header() {
  const { cart } = useContext(ecomcontext);
  return (
    <>
      <header>
          <Link to="/Home"><img src={logo} alt="" /></Link>
        <ul>
          <li>
            <Link to="/Home"><IoHome />
            </Link>
          </li>
          <li>
            <Link to="/blog"><FaBlog /></Link>
          </li>
          <li>
            <Link to="/Contact"><GrContactInfo /></Link>
          </li>
          <li>
            <Link to="/Cart"><FaCartShopping /><span>{cart.length}</span>
            </Link>
          </li>
          <li>
            <Link to="/"><CgProfile /></Link>
          </li>          
        </ul>
      </header>
    </>
  );
}

export default Header;
