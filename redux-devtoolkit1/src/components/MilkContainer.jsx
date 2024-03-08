import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "../features/milk/MilkSlice";

export default function milkContainer() {
  const [value, setValue] = useState(0);

  const milk = useSelector((state) => state.milk);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>milk Number : {milk.numOfMilk}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(buyMilk(value))}>buy Milk</button>
    </div>
  );
}
