import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.date} />
      ))}
    </div>
  );
};

export default TodoItems;
