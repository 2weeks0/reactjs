import { useSelector, useDispatch } from "react-redux";
import { setDiff, selectDiff } from "../store/slices/diffSlice";

export default function DiffSetter() {
  const diff = useSelector(selectDiff);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="number"
        min="1"
        onChange={(e) => dispatch(setDiff({ diff: +e.target.value }))}
        value={diff}
      />
    </div>
  );
}
