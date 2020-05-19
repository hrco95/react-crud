import React, { Component } from "react";
import TeamList from "./TeamList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./Team.css";

class Team extends Component {
  render() {
    const { player } = this.props;
    return (
      <div className="container">
        <TeamList player={player} />
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
)(Team);
