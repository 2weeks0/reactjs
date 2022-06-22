import React from "react";
import { connect } from "react-redux";

class Value extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.number}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ number: state.counter.number });

export default connect(mapStateToProps)(Value);
