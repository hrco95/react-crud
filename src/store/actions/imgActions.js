import { storageRef } from "../../config/firebaseConfig";

export const uploadImage = imgFiles => {
  return async dispatch => {
    const array = Array.from(
      { length: imgFiles.length },
      (value, index) => index
    );

    const uploadedFiles = await Promise.all(
      array.map(async index => {
        const file = imgFiles[index];

        const metadata = {
          contentType: "image/jpeg"
        };

        const uploadTask = storageRef
          .child(`images/${file.name}`)
          .put(file, metadata);

        const url = await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            () => {},
            error => reject(error),
            async () => {
              const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
              resolve(downloadURL);
            }
          );
        });
        return { name: file.name, url };
      })
    );
    await dispatch({ type: "UPLOADING_SUCCESS", imgurl: uploadedFiles });
  };
};
