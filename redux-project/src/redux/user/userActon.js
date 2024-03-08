import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userType";

function fetchRequestUsers() {
  return {
    type: FETCH_USER_REQUEST,
  };
}
function fetchSuccessUsers(users) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
}
function fetchFailureUsers(error) {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchRequestUsers);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(fetchSuccessUsers(res.data)))
      .catch((err) => dispatch(fetchFailureUsers(err.message)));
  };
}
