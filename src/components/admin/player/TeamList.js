import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import PlayerItem from "./PlayerItem";

class TeamList extends Component {
  render() {
    const { player } = this.props;

    return (
      <div className="player-list section">
        {player &&
          player.map((player) => {
            return (
              <Link
                to={"/adminpanel/editplayer/" + player.id}
                key={player.id}
                className="text-decoration-none"
                style={{ color: "black" }}
              >
                <PlayerItem player={player} />
              </Link>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.firestore.ordered.player,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "player",
    },
  ])
)(TeamList);
