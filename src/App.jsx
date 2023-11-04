import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelecomeMessage from "./Components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueData) => {
    const newItems = [
      ...todoItems,
      {
        name: itemName,
        date: itemDueData,
      },
    ];

    setTodoItems(newItems);
  };

  const handleDeleteItems = (itemName) => {
    const newList = todoItems.filter((item) => item.name != itemName);
    setTodoItems(newList);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length == 0 && <WelecomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItems} />
    </center>
  );
}

export default App;
