import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { editPlayer, deletePlayer } from "../../../store/actions/playerActions";
import { Input, Form, Button } from "antd";
import ImageUpload from "../image/ImageUpload";

class EditPlayer extends Component {
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
    const id = this.props.match.params.id;
    this.props.editPlayer(this.state, id);
    this.props.history.push("/adminpanel/teamlist");
  };

  handleDelete = (e) => {
    const id = this.props.match.params.id;
    this.props.deletePlayer(id);
    this.props.history.push("/adminpanel/teamlist");
  };

  componentDidMount() {
    const { player } = this.props;
    console.log(player);

    this.setState({
      playerFirstName: player.playerFirstName,
      playerLastName: player.playerLastName,
      birthday: player.birthday,
      position: player.position,
      clubs: player.clubs,
      image: player.image,
    });
  }

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
      <div>
        <Link to="/adminpanel/teamlist">
          <Button type="primary">Back</Button>
        </Link>
        <div>
          <img src={imageURL} style={{ width: 300, height: 300 }} alt=""></img>
          <ImageUpload />
        </div>

        <form onSubmit={this.handleSubmit}>
          <Form.Item label="Ime">
            <Input
              type="text"
              id="playerFirstName"
              onChange={this.handleChange}
              required
              value={this.state.playerFirstName}
            />
          </Form.Item>
          <Form.Item label="Prezime">
            <Input
              type="text"
              id="playerLastName"
              onChange={this.handleChange}
              required
              value={this.state.playerLastName}
            />
          </Form.Item>
          <Form.Item label="Datum rođenja">
            <Input
              type="text"
              id="birthday"
              onChange={this.handleChange}
              required
              placeholder="DD/MM/GODINA"
              value={this.state.birthday}
            />
          </Form.Item>
          <Form.Item label="Pozicija">
            <Input
              type="text"
              id="position"
              onChange={this.handleChange}
              required
              value={this.state.position}
            />
          </Form.Item>
          <Form.Item label="Prijašnji klubovi">
            <Input
              type="text"
              id="clubs"
              onChange={this.handleChange}
              required
              value={this.state.clubs}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Uredi igača
            </Button>
            <Button type="danger" onClick={this.handleDelete}>
              Delete
            </Button>
          </Form.Item>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const player = state.firestore.data.player;
  const singlePlayer = player ? player[id] : null;
  return {
    player: singlePlayer,
    item: state.item.imgurl,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editPlayer: (player, id) => dispatch(editPlayer(player, id)),
    deletePlayer: (id) => dispatch(deletePlayer(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "news",
    },
  ])
)(EditPlayer);
