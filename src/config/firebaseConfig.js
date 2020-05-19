import * as firebase from "firebase";

const config = {
  /* Config info */
};

// Initialize Firebase
firebase.initializeApp(config);
export const storage = firebase.storage();
export const storageRef = storage.ref();
export default firebase;
