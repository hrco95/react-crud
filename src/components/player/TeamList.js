import React from "react";
import PlayerSummary from "./PlayerSummary";
import { Link } from "react-router-dom";
import "./Team.css";

const TeamList = ({ player }) => {
  return (
    <div className="container-fluid d-flex flex-wrap justify-content-center">
      {player &&
        player.map((player) => {
          return (
            <Link
              to={"/player/" + player.id}
              key={player.id}
              style={{ color: "black" }}
              className="text-decoration-none"
            >
              <PlayerSummary player={player} />
            </Link>
          );
        })}
    </div>
  );
};

export default TeamList;
