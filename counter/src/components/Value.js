import { useSelector } from "react-redux";
import { selectCounter } from "../store/slices/counterSlice";

export default function Value() {
  const count = useSelector(selectCounter);

  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
}
