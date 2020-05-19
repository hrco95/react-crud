import React, { Component } from "react";
import { connect } from "react-redux";
import { createNews } from "../../../store/actions/newsActions";
import { Input, Form, Button } from "antd";

const { TextArea } = Input;

class CreateNews extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNews(this.state);
    this.props.history.push("/adminpanel/newslist");
  };

  render() {
    return (
      <form className="white" onSubmit={this.handleSubmit}>
        <Form.Item label="Naslov">
          <Input id="title" onChange={this.handleChange} required />
        </Form.Item>
        <Form.Item label="Tekst"></Form.Item>
        <TextArea rows={4} id="content" onChange={this.handleChange} required />

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Dodaj vijest
          </Button>
        </Form.Item>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNews: (news) => dispatch(createNews(news)),
  };
};

export default connect(null, mapDispatchToProps)(CreateNews);
