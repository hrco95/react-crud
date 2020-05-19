import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "../core/SignedInLinks";
import SignedOutLinks from "../core/SignedOutLinks";
import { connect } from "react-redux";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { auth } = this.props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

    return (
      <header className="main-head">
        <nav>
          <h1 id="logo">
            <Link to="/" className="brand-logo text-decoration-none">
              HNK ROVIŠĆE
            </Link>
          </h1>
          <input type="checkbox" className="menu-check" />
          <ul className="nav-links">{links}</ul>
          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
