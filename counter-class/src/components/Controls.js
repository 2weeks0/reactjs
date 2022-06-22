import React from "react";
import { connect } from "react-redux";
import { increment, decrement, incrementAsync, decrementAsync } from "../store/slices/counterSlice";

class Controls extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch(increment({ diff: this.props.diff }))}>+</button>
        <button onClick={() => this.props.dispatch(decrement({ diff: this.props.diff }))}>-</button>
        <br />
        <button onClick={() => this.props.dispatch(incrementAsync({ diff: this.props.diff }))}>+ Async</button>
        <button onClick={() => this.props.dispatch(decrementAsync({ diff: this.props.diff }))}>- Async</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ diff: state.diff.value });

export default connect(mapStateToProps)(Controls);
