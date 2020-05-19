import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import NewsSummary from "../../news/NewsSummary";

class NewsList extends Component {
  render() {
    const { news } = this.props;

    return (
      <div className="news-list section">
        {news &&
          news.map((news) => {
            return (
              <Link
                to={"/adminpanel/editnews/" + news.id}
                key={news.id}
                className="text-decoration-none"
                style={{ color: "black" }}
              >
                <NewsSummary news={news} />
              </Link>
            );
          })}
      </div>
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
    },
  ])
)(NewsList);
