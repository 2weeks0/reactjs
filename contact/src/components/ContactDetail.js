import React from "react";
import PropTypes from "prop-types";

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
    this.handleKeyPress = this.handleKeyPress.bind(this);
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

  handleKeyPress(e) {
    if (e.charCode === 13) {
      if (e.target.name === "name") {
        this.inputPhone.focus();
      } else if (e.target.name === "phone") {
        this.handleSave();
      }
    }
  }

  render() {
    const component = (
      <div>
        {this.state.isEditMode ? (
          <div>
            <p>
              <input
                name="name"
                ref={(ref) => (this.inputName = ref)}
                onChange={this.handleChange}
                value={this.state.name}
                onKeyPress={this.handleKeyPress}
              ></input>
            </p>
            <p>
              <input
                name="phone"
                ref={(ref) => (this.inputPhone = ref)}
                onChange={this.handleChange}
                value={this.state.phone}
                onKeyPress={this.handleKeyPress}
              ></input>
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

ContactDetail.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  onSave: PropTypes.func,
  onRemove: PropTypes.func,
};

ContactDetail.defaultProps = {
  onSave: () => {
    console.error("onSave is not defined");
  },
  onRemove: () => {
    console.error("onRemove is not defined");
  },
};
