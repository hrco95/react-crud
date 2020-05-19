import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Spin } from "antd";
import "./Team.css";

const PlayerDetails = (props) => {
  const { player } = props;

  if (player) {
    let imageURL = "";
    if (player.image[0] === null) {
      imageURL =
        "https://sunrisepublish.com/wp-content/uploads/2016/03/placeholder-profile-male.jpg";
    } else {
      imageURL = player.image[0].url;
    }

    return (
      <div className="container">
        <div className="row p-5">
          <div className="col">
            <div className="card p-3">
              <img src={imageURL} className="card_img img-fluid" alt=""></img>
              <div className="card-content">
                <h2 className="card-title text-center">
                  {player.playerFirstName} {player.playerLastName}
                </h2>
                <p className="card-text">Datum rođenja: {player.birthday}</p>
                <p className="card-text">Prijašnji klubovi: {player.clubs}</p>

                <p className="card-text">Pozicija: {player.position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <Spin size="large" />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const players = state.firestore.data.player;
  const player = players ? players[id] : null;
  return {
    player: player,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "player",
    },
  ])
)(PlayerDetails);
