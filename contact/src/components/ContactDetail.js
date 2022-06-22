import { useState, useRef } from "react";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  onSave: PropTypes.func,
  onRemove: PropTypes.func,
};

const defaultProps = {
  onSave: () => {
    console.error("onSave is not defined");
  },
  onRemove: () => {
    console.error("onRemove is not defined");
  },
};

export default function ContactDetail(props) {
  const [isEditMode, setEditMode] = useState(false);
  const [name, setName] = useState(props.name);
  const [phone, setPhone] = useState(props.phone);

  const inputPhoneElement = useRef(null);

  const handleEdit = () => setEditMode(true);
  const handleSave = () => {
    props.onSave({ name, phone });
    setEditMode(false);
  };
  const handleRemove = () => props.onRemove();
  const handleCancel = () => setEditMode(false);
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      if (e.target.name === "name") {
        inputPhoneElement.current.focus();
      } else if (e.target.name === "phone") {
        handleSave();
      }
    }
  };

  const component = (
    <div>
      {isEditMode ? (
        <div>
          <p>
            <input
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              onKeyPress={handleKeyPress}
            ></input>
          </p>
          <p>
            <input
              name="phone"
              ref={inputPhoneElement}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              onKeyPress={handleKeyPress}
            ></input>
          </p>
        </div>
      ) : (
        <div>
          <p>{name}</p>
          <p>{phone}</p>
        </div>
      )}
      <span>
        <button onClick={isEditMode ? handleSave : handleEdit}>
          {isEditMode ? "Save" : "Edit"}
        </button>
        <button onClick={isEditMode ? handleCancel : handleRemove}>
          {isEditMode ? "Cancel" : "Remove"}
        </button>
      </span>
    </div>
  );

  return (
    <div>
      <h1>Details</h1>
      {name ? component : "Not selected."}
    </div>
  );
}

ContactDetail.propTypes = propTypes;
ContactDetail.defaultProps = defaultProps;
