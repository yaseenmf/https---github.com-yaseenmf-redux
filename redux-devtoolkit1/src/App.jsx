import { Provider } from "react-redux";
import "./App.css";
import store from "./features/store";
import CakeContainer from "./components/CakeContainer";
import MilkContainer from "./components/MilkContainer";
import UserList from "./components/userList";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <MilkContainer />
      <hr />
      <UserList />
    </Provider>
  );
}

export default App;
