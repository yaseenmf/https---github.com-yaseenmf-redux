import { BUY_MILK } from "./milkType";

const initialState = {
  numOfMilk: 10,
};

export default function milkReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_MILK: {
      return {
        ...state,
        numOfMilk: state.numOfMilk - action.payload,
      };
    }
    default:
      return state;
  }
}
