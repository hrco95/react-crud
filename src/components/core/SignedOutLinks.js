import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
const SignedOutLinks = () => {
  return (
    <>
      <li>
        <NavLink to="/">Vijesti</NavLink>
      </li>
      <li>
        <NavLink to="/team">Momčad</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Sign In</NavLink>
      </li>
    </>
  );
};

export default SignedOutLinks;
