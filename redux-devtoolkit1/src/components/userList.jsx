import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/user/userSlice";
import Loader from "../page/loader";

export default function UserList() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);

  if (loading)
    return (
      <p>
        <Loader />
      </p>
    );
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>userList</h2>
      <div>
        {data && data.map((user) => <li key={user.id}>{user.name} </li>)}
      </div>
    </div>
  );
}
