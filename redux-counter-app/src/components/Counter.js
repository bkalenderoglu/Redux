import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  increaseByAmount,
} from "../redux/counter/counterSlice";

function Counter() {
  const [amount, setAmount] = useState(3);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(increaseByAmount(amount))}>
        Increase By Amount
      </button>
    </div>
  );
}

export default Counter;
