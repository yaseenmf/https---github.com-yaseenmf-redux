import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

export default function CakeContainer() {
  const [value, setValue] = useState(0);

  const cake = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>CakeNumber : {cake.numOfCake}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(value))}>buy Cake</button>
    </div>
  );
}
