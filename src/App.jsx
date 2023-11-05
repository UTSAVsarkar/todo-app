import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import WelecomeMessage from "./Components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelecomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
