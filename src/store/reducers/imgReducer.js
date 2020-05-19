const initState = {
  imgurl: [null]
};

const imgReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPLOADING_SUCCESS":
      console.log(action.imgurl);
      return {
        ...state,
        imgurl: action.imgurl
      };
    case "UPLOADING_FAILED":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default imgReducer;
