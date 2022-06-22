import DiffSetter from "./DiffSetter";
import Value from "./Value";
import Controls from "./Controls";

export default function Counter() {
  return (
    <div>
      <h1>Counter</h1>
      <DiffSetter />
      <Value />
      <Controls />
    </div>
  );
}