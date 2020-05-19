import React, { Component } from "react";
import NewsList from "./NewsList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./News.css";

class News extends Component {
  render() {
    const { news } = this.props;

    return (
      <section className="container">
        <NewsList news={news} />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.firestore.ordered.news,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "news",
      orderBy: ["createdAt", "desc"],
    },
  ])
)(News);
