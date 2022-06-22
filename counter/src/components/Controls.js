import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementAsync, decrementAsync } from "../store/slices/counterSlice";
import { selectDiff } from "../store/slices/diffSlice";

export default function Controls() {
  const diff = useSelector(selectDiff);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment({ diff }))}>+</button>
      <button onClick={() => dispatch(decrement({ diff }))}>-</button>
      <br />
      <button onClick={() => dispatch(incrementAsync({ diff }))}>+ Async</button>
      <button onClick={() => dispatch(decrementAsync({ diff }))}>- Async</button>
    </div>
  );
}
