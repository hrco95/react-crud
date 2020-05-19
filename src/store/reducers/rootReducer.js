import authReducer from "./authReducer";
import newsReducer from "./newsReducer";
import playerReducer from "./playerReducer";
import imgReducer from "./imgReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  item: imgReducer,
  auth: authReducer,
  news: newsReducer,
  player: playerReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
