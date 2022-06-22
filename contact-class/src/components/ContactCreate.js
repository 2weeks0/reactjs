import React from "react";
import PropTypes from "prop-types";

export default class ContactCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", phone: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleCreate() {
    this.props.onCreate({
      name: this.state.name,
      phone: this.state.phone,
    });
    this.setState({ name: "", phone: "" });
  }

  handleKeyPress(e) {
    if (e.charCode === 13) {
      if (e.target.name === "name") {
        this.inputPhone.focus();
      } else if (e.target.name === "phone") {
        this.handleCreate();
        this.inputName.focus();
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Create Contact</h1>
        <p>
          <input
            name="name"
            ref={(ref) => (this.inputName = ref)}
            onChange={this.handleChange}
            placeholder="name"
            value={this.state.name}
            onKeyPress={this.handleKeyPress}
          ></input>
        </p>
        <p>
          <input
            name="phone"
            ref={(ref) => (this.inputPhone = ref)}
            onChange={this.handleChange}
            placeholder="phone"
            value={this.state.phone}
            onKeyPress={this.handleKeyPress}
          ></input>
        </p>
        <button onClick={this.handleCreate}>Create</button>
      </div>
    );
  }
}

ContactCreate.propTypes = {
  onCreate: PropTypes.func,
};

ContactCreate.defaultProps = {
  onCreate: () => {
    console.error("onCreate is not defined");
  },
};
