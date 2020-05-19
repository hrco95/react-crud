import React, { Component } from "react";
import { uploadImage } from "../../../store/actions/imgActions";
import { connect } from "react-redux";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  onFileChange = e => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      newFile["id"] = Math.random();

      this.setState(state => {
        const files = [...state.files, newFile];
        return {
          files
        };
      });
    }
  };

  fileUploadHandler = () => {
    this.props.uploadImage(this.state.files);
  };

  render() {
    const { files } = this.state;
    const enabled = files.length > 0;

    return (
      <div className="image-upload-container">
        <input type="file" multiple onChange={this.onFileChange} />
        <button onClick={this.fileUploadHandler} disabled={!enabled}>
          Upload
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.item.imgurl
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadImage: imgFiles => dispatch(uploadImage(imgFiles))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
