import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.date}
          onDeleteClick={onDeleteClick}
          index={index}
        />
      ))}
    </div>
  );
};

export default TodoItems;
