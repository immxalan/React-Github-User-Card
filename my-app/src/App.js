import React from "react";
import axios from "axios";
import UserCard from "./UserCard";
import FollowerCard from"./FollowerCard";
import "./App.css";

class App extends React.Component {
  state = {
    //user is for setting my personal profile card, followers is the array of followers I have
    user: {},
    follower: []
  };

  fetchUsers = () => {
    axios
      .get("https://api.github.com/users/immxalan")
      .then(response => {
        console.log(response.data);
        this.setState({ user: response.data });
      })
      .catch(err => {
        console.log(err);
      });
      axios
      .get("https://api.github.com/users/immxalan/followers")
      .then(res => {
        console.log(res.data);
        this.setState({ ...this.state, follower: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div className="container">
      <div className="user">
        <UserCard user={this.state.user} />
      </div>
      <div className="cards">
        {this.state.follower.map(follower => (
          <FollowerCard
            key={follower.id}
            img={follower.avatar_url}
            followers={follower.login}
          />
        ))}
      </div>
      </div>
    );
  }
}

export default App;