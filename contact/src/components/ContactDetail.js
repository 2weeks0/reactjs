import React from "react";

export default class ContactDetail extends React.Component {
  render() {
    const component = (
      <div>
        <p>{this.props.info?.name}</p>
        <p>{this.props.info?.phone}</p>
      </div>
    );

    return (
      <div>
        <h1>Details</h1>
        {this.props.info ? component : "Not selected."}
      </div>
    );
  }
}
