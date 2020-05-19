import React from "react";

const PlayerItem = ({ player }) => {
  return (
    <div className="card mt-5">
      <div className="card-body d-flex flex-column">
        <h2 className="card-title">
          {player.playerFirstName} {player.playerLastName}
        </h2>
      </div>
    </div>
  );
};

export default PlayerItem;
