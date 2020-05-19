export const createNews = (news) => {
  return (dispatch, getState, { getFirestore }) => {
    //async call to db
    const firestore = getFirestore();
    firestore
      .collection("news")
      .add({
        ...news,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_NEWS", news: news });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_NEWS_ERROR" }, err);
      });
  };
};

export const editNews = (news, id) => {
  return (dispatch, getState, { getFirestore }) => {
    //async call to db
    const firestore = getFirestore();
    firestore
      .collection("news")
      .doc(`${id}`)
      .update({
        ...news,
      })
      .then(() => {
        dispatch({ type: "EDIT_NEWS", news: news });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_NEWS_ERROR" }, err);
      });
  };
};

export const deleteNews = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    //async call to db
    const firestore = getFirestore();
    firestore
      .collection("news")
      .doc(`${id}`)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_NEWS" });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_NEWS_ERROR" }, err);
      });
  };
};
