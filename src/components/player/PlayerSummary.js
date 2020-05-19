import React from "react";
import "./Team.css";

const PlayerSummary = ({ player }) => {
  let imageURL = "";
  if (player.image[0] === null) {
    imageURL =
      "https://sunrisepublish.com/wp-content/uploads/2016/03/placeholder-profile-male.jpg";
  } else {
    imageURL = player.image[0].url;
  }

  return (
    <div className="row p-5 d-flex justify-content-center">
      <div className="card ">
        <img src={imageURL} className="card_img" alt="" />
        <div className="card-body text-dark fluid">
          <h5 className="card-title">
            {player.playerFirstName} {player.playerLastName}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PlayerSummary;
