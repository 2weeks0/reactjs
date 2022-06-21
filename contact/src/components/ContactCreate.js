import React from "react";

export default class ContactCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", phone: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
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

  render() {
    return (
      <div>
        <h1>Create Contact</h1>
        <p>
          <input
            name="name"
            onChange={this.handleChange}
            placeholder="name"
            value={this.state.name}
          ></input>
        </p>
        <p>
          <input
            name="phone"
            onChange={this.handleChange}
            placeholder="phone"
            value={this.state.phone}
          ></input>
        </p>
        <button onClick={this.handleCreate}>Create</button>
      </div>
    );
  }
}
