import React from "react";

export default class ContactDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditMode: false,
      name: props.name,
      phone: props.phone,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleEdit() {
    this.setState({ isEditMode: true });
  }

  handleSave() {
    this.props.onSave({ name: this.state.name, phone: this.state.phone });
    this.setState({ isEditMode: false });
  }

  handleRemove() {
    this.props.onRemove();
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleCancel() {
    this.setState({ isEditMode: false });
  }

  render() {
    const component = (
      <div>
        {this.state.isEditMode ? (
          <div>
            <p>
              <input name="name" onChange={this.handleChange} value={this.state.name}></input>
            </p>
            <p>
              <input name="phone" onChange={this.handleChange} value={this.state.phone}></input>
            </p>
          </div>
        ) : (
          <div>
            <p>{this.state.name}</p>
            <p>{this.state.phone}</p>
          </div>
        )}
        <span>
          <button onClick={this.state.isEditMode ? this.handleSave : this.handleEdit}>
            {this.state.isEditMode ? "Save" : "Edit"}
          </button>
          <button onClick={this.state.isEditMode ? this.handleCancel : this.handleRemove}>
            {this.state.isEditMode ? "Cancel" : "Remove"}
          </button>
        </span>
      </div>
    );

    return (
      <div>
        <h1>Details</h1>
        {this.props.name ? component : "Not selected."}
      </div>
    );
  }
}
