const initState = {};

const playerReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PLAYER":
      return state;
    case "CREATE_PLAYER_ERROR":
      return state;
    case "EDIT_PLAYER":
      return state;
    case "DELETE_PLAYER":
      return state;
    case "DELETE_PLAYER_ERROR":
      return state;
    default:
      return state;
  }
};

export default playerReducer;
