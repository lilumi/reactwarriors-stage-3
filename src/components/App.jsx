import React, { Component } from "react";
import Movies from "./Movies/Movies";
import Header from "./Header/Header";
import Cookies from "universal-cookie";
import { API_KEY_3 } from "../utils/utils";

const cookies = new Cookies();

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };
  }

  updateUser = user => {
    this.setState({ user });
  };

  componentDidMount() {
    this.checkSession();
  }

  checkSession = () => {
    const session_id = cookies.get("session_id");
    if (session_id) {
      fetch(
        `https://api.themoviedb.org/3/account?api_key=${API_KEY_3}&session_id=${session_id}`
      )
        .then(response => response.json())
        .then(data => {
          this.updateUser(data);
        });
    }
  };

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <Header user={user} updateUser={this.updateUser} />
        <Movies />
      </React.Fragment>
    );
  }
}

export default App;
