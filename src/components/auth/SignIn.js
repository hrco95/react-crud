import React, { Component } from "react";
import { signIn } from "../../store/actions/authActions";

//Router
import { Redirect } from "react-router-dom";

//Redux
import { connect } from "react-redux";

//Ant
import "antd/dist/antd.css";
import { Form, Input, Button, Row, Col } from "antd";

//Style
const rowStyle = {
  height: "100vh"
};

const colStyle = {
  width: "400px",
  marginLeft: "20px",
  marginRight: "20px"
};

const buttonStyle = {
  margin: "auto"
};
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;

    if (auth.uid) return <Redirect to="/adminpanel" />;
    return (
      <Row type="flex" justify="center" align="middle" style={rowStyle}>
        <Col style={colStyle}>
          <form onSubmit={this.handleSubmit}>
            <Form.Item>
              <Input
                type="text"
                id="email"
                onChange={this.handleChange}
                required
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item>
              <Input
                type="password"
                id="password"
                onChange={this.handleChange}
                required
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={buttonStyle}
              >
                Log in
              </Button>
            </Form.Item>
            <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>
          </form>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
