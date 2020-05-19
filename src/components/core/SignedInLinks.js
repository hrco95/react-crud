import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import "./Navbar.css";
const SignedInLinks = (props) => {
  return (
    <>
      <li>
        <NavLink to="/">Vijesti</NavLink>
      </li>
      <li>
        <NavLink to="/team">Momčad</NavLink>
      </li>
      <li>
        <NavLink to="/adminpanel">Admin</NavLink>
      </li>
      <li>
        <a href="/" onClick={props.signOut}>
          Log Out
        </a>
      </li>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
