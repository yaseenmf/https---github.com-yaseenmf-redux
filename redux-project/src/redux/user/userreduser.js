import { FETCH_USER_REQUEST } from "./userType";
import { FETCH_USER_SUCCESS } from "./userType";
import { FETCH_USER_FAILURE } from "./userType";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
}
