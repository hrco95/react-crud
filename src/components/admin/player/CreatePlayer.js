import React, { Component } from "react";
import { connect } from "react-redux";
import { createPlayer } from "../../../store/actions/playerActions";
import ImageUpload from "../image/ImageUpload";
import { Form, Input, Button } from "antd";

class CreatePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerFirstName: "",
      playerLastName: "",
      birthday: "",
      position: "",
      clubs: "",
      image: [null],
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createPlayer(this.state);
  };

  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.setState({
        image: this.props.item,
      });
    }
  }

  render() {
    let imageURL = "";

    if (this.state.image[0] === null) {
      imageURL =
        "https://sunrisepublish.com/wp-content/uploads/2016/03/placeholder-profile-male.jpg";
    } else {
      imageURL = this.state.image[0].url;
    }

    return (
      <div className="createplayer__container">
        <img src={imageURL} style={{ width: 300, height: 300 }} alt=""></img>
        <ImageUpload />

        <form onSubmit={this.handleSubmit}>
          <Form.Item label="Ime">
            <Input
              type="text"
              id="playerFirstName"
              onChange={this.handleChange}
              required
            />
          </Form.Item>
          <Form.Item label="Prezime">
            <Input
              type="text"
              id="playerLastName"
              onChange={this.handleChange}
              required
            />
          </Form.Item>
          <Form.Item label="Datum rođenja">
            <Input
              type="text"
              id="birthday"
              onChange={this.handleChange}
              required
              placeholder="DD/MM/GODINA"
            />
          </Form.Item>
          <Form.Item label="Pozicija">
            <Input
              type="text"
              id="position"
              onChange={this.handleChange}
              required
            />
          </Form.Item>
          <Form.Item label="Prijašnji klubovi">
            <Input
              type="text"
              id="clubs"
              onChange={this.handleChange}
              required
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Dodaj igrača
            </Button>
          </Form.Item>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    item: state.item.imgurl,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPlayer: (player) => dispatch(createPlayer(player)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatePlayer);
