import { useState, useRef } from "react";
import PropTypes from "prop-types";

const propTypes = {
  onCreate: PropTypes.func,
};

const defaultProps = {
  onCreate: () => {
    console.error("onCreate is not defined");
  },
};

export default function ContactCreate(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const inputNameElement = useRef(null);
  const inputPhoneElement = useRef(null);

  const handleCreate = () => {
    props.onCreate({
      name,
      phone,
    });
    setName("");
    setPhone("");
  };
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      if (e.target.name === "name") {
        inputPhoneElement.current.focus();
      } else if (e.target.name === "phone") {
        handleCreate();
        inputNameElement.current.focus();
      }
    }
  };

  return (
    <div>
      <h1>Create Contact</h1>
      <p>
        <input
          name="name"
          ref={inputNameElement}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          value={name}
          onKeyPress={handleKeyPress}
        ></input>
      </p>
      <p>
        <input
          name="phone"
          ref={inputPhoneElement}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="phone"
          value={phone}
          onKeyPress={handleKeyPress}
        ></input>
      </p>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

ContactCreate.propTypes = propTypes;
ContactCreate.defaultProps = defaultProps;
