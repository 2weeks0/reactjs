import React from "react";
import { connect } from "react-redux";
import { setDiff } from "../store/slices/diffSlice";

class DiffSetter extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.dispatch(setDiff({ diff: +e.target.value }));
  }

  render() {
    return (
      <div>
        <input type="number" min="1" onChange={this.handleChange} value={this.props.diff} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ diff: state.diff.value });

export default connect(mapStateToProps)(DiffSetter);
