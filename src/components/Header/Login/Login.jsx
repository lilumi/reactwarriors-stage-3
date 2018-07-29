import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import LoginForm from "./LoginForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { updateUser } = this.props;
    return (
      <div>
        <button
          className="btn btn-success "
          type="button"
          onClick={this.toggle}
        >
          Login
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <LoginForm updateUser={updateUser} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Login;
