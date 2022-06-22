import React from "react";
import PropsType from "prop-types";

export default class ContactInfo extends React.Component {
  render() {
    return <p onClick={this.props.onClick}>{this.props.name}</p>;
  }
}

ContactInfo.propsType = {
  name: PropsType.string,
  onClick: PropsType.func,
};

ContactInfo.defaultProps = {
  onClick: () => {
    console.error("onClick is not defined.");
  },
};
