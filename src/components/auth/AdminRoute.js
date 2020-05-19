import React from "react";

//Router
import { Route, Redirect } from "react-router-dom";

//Redux
import { connect } from "react-redux";

const AdminRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.uid ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(AdminRoute);
