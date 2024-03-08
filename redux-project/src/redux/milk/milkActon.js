import { BUY_MILK } from "./milkType";
export function buyMilk(milk = 1) {
  return {
    type: BUY_MILK,
    payload: milk,
  };
}
