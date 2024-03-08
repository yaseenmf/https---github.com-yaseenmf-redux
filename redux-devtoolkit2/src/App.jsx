import { useSelector } from "react-redux";
import AddTodoForm from "./components/todos/AddTodoForm";
import TodoList from "./components/todos/todosList";
import "./App.css";

export default function App() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div className="container pt-3">
      <h1 className="text-center">todoApp with</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}
