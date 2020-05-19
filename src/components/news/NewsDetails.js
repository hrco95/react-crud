import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Spin } from "antd";
import moment from "moment";
import "moment/locale/hr";
moment.locale("hr");

const NewsDetails = (props) => {
  const { news } = props;
  if (news) {
    return (
      <div className="container section news-details">
        <div className="card mt-5">
          <div className="card-body w-100 d-flex flex-column">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.content}</p>
            <p className="card-text">
              <small className="text-muted">
                {moment(news.createdAt.toDate()).startOf("hour").fromNow()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <Spin />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const news = state.firestore.data.news;
  const singleNews = news ? news[id] : null;
  return {
    news: singleNews,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "news",
    },
  ])
)(NewsDetails);
