import React from "react";
import moment from "moment";
import "moment/locale/hr";
import "./News.css";
moment.locale("hr");

const NewsSummary = ({ news }) => {
  let newsTitle = news.title;
  let newsTitleUpCase = newsTitle.toUpperCase();

  return (
    <div className="card mt-5">
      <div className="card-body d-flex flex-column">
        <h2 className="card-title">{newsTitleUpCase}</h2>
        <p className="card-text h3">
          <small className="text-muted">
            {moment(news.createdAt.toDate()).startOf("hour").fromNow()}
          </small>
        </p>
      </div>
    </div>
  );
};

export default NewsSummary;
