const initState = {};

const newsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_NEWS":
      return state;
    case "CREATE_PROJECT_ERROR":
      return state;
    case "EDIT_NEWS":
      return state;
    case "DELETE_NEWS":
      return state;
    case "DELETE_NEWS_ERROR":
      return state;
    default:
      return state;
  }
};

export default newsReducer;
