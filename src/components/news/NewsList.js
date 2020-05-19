import React from "react";
import NewsSummary from "./NewsSummary";
import { Link } from "react-router-dom";
import "./News.css";

const NewsList = ({ news }) => {
  return (
    <div className="news-list section">
      {news &&
        news.map((news) => {
          return (
            <Link
              to={"/news/" + news.id}
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
};

export default NewsList;
