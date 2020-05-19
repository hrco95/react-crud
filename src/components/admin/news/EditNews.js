import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { editNews, deleteNews } from "../../../store/actions/newsActions";
import { Input, Form, Button } from "antd";

const { TextArea } = Input;

class EditNews extends Component {
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
    const id = this.props.match.params.id;
    this.props.editNews(this.state, id);
    this.props.history.push("/adminpanel/newslist");
  };

  handleDelete = (e) => {
    const id = this.props.match.params.id;
    this.props.deleteNews(id);
    this.props.history.push("/adminpanel/newslist");
  };

  componentDidMount() {
    const { news } = this.props;
    this.setState({
      title: news.title,
      content: news.content,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Link to="/adminpanel/newslist">
          <Button type="primary">Back</Button>
        </Link>

        <form className="white" onSubmit={this.handleSubmit}>
          <Form.Item label="Naslov">
            <Input
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </Form.Item>
          <Form.Item label="Tekst"></Form.Item>
          <TextArea
            rows={4}
            id="content"
            value={this.state.content}
            onChange={this.handleChange}
            required
          />

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Uredi vijest
            </Button>
            <Button type="danger" onClick={this.handleDelete}>
              Delete
            </Button>
          </Form.Item>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const news = state.firestore.data.news;
  const singleNews = news ? news[id] : null;
  return {
    news: singleNews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editNews: (news, id) => dispatch(editNews(news, id)),
    deleteNews: (id) => dispatch(deleteNews(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "news",
    },
  ])
)(EditNews);
