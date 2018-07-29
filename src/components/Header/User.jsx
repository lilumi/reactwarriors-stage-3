import React, { Component } from "react";

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="d-flex align-items-center">
          <img
            width="40px"
            className="rounded-circle"
            src={`https://secure.gravatar.com/avatar/${
              user.avatar.gravatar.hash
            }.jpg?s=64"`}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default User;
