export const createPlayer = (player) => {
  return (dispatch, getState, { getFirestore }) => {
    //async call to db
    const firestore = getFirestore();
    firestore
      .collection("player")
      .add({
        ...player,
      })
      .then(() => {
        dispatch({ type: "CREATE_PLAYER", player: player });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PLAYER_ERROR" }, err);
      });
  };
};

export const editPlayer = (player, id) => {
  return (dispatch, getState, { getFirestore }) => {
    //async call to db
    const firestore = getFirestore();
    firestore
      .collection("player")
      .doc(`${id}`)
      .update({
        ...player,
      })
      .then(() => {
        dispatch({ type: "EDIT_PLAYER", player: player });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PLAYER_ERROR" }, err);
      });
  };
};

export const deletePlayer = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    //async call to db
    const firestore = getFirestore();
    firestore
      .collection("player")
      .doc(`${id}`)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_PLAYER" });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_PLAYER_ERROR" }, err);
      });
  };
};
