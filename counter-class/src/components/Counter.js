import DiffSetter from "./DiffSetter";
import Value from "./Value";
import Controls from "./Controls";
import React from "react";

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <DiffSetter />
        <Value />
        <Controls />
      </div>
    );
  }
}
